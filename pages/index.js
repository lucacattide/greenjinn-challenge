// Module Start
// JS imports
import React, {useState} from 'react';
import {
  Grid,
  useMediaQuery
} from '@material-ui/core';
import {
  makeStyles,
  useTheme
} from '@material-ui/core/styles';
import clsx from 'clsx';
import Layout from '../components/Layout';
import Ticker from '../components/Ticker';
import TradingPairs from '../components/TradingPairs';
import GJNumbersView from '../components/GJNumber/GJNumbersView';

// Styles
const useStyles = makeStyles({
  container: {
    height: '100vh'
  },
  margin: {
    margin: '0 0 1em'
  }
});

/**
 * @description Index
 * @author Luca Cattide
 * @export
 * @returns
 */
export default function Index({
  averageTickerValues,
  tradingPairs,
  initialPair
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [pair, setPair] = useState({
    info: tradingPairs[0],
    values: initialPair
  });
  const [loading, setLoading] = useState(false);
  const handleSelectedPair = async (pair) => {
    setLoading(true);

    try {
      // This is a universal proxy to evade localhost CORS problems
      // Not the best choice in production but definitely the quickest for this challenge
      const responsePair = await fetch('//cors-anywhere.herokuapp.com/'+
      `https://www.bitstamp.net/api/v2/ticker/${pair.url_symbol}`);
      const dataPair = await responsePair.json();

      // Data check
      if (!dataPair) {
        return `Trading pair ${pair.name} not found.`;
      }

      setPair({
        info: pair,
        values: dataPair
      });
    } catch(error) {
      return error;
    }

    setLoading(false);
  };

  return (
    /* Layout Start */
    <Layout>
      <Grid
        container
        spacing={2}
        justify="center"
        className={classes.container}
      >
        {/* ATV Start */}
        <Grid item xs={12} md={6}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={clsx({
              [classes.margin]: !matches,
              [classes.container]: matches
            })}
          >
            <Grid item>
              <Ticker atv={averageTickerValues} />
            </Grid>
          </Grid>
        </Grid>
        {/* ATV End */}
        {/* Trading Start */}
        <Grid item xs={12} md={6}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={clsx({
              [classes.container]: matches
            })}
          >
            {/* Pairs Start */}
            <Grid item xs={12}>
              <TradingPairs
                tradingPairs={tradingPairs}
                pair={pair}
                selectedPair={handleSelectedPair}
              />
            </Grid>
            {/* Pairs End */}
            {/* Values Start */}
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justify="center"
              >
                <Grid item xs={12}>
                  <GJNumbersView
                    title={pair.info.description}
                    numbers={pair.values}
                    loading={loading}
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* Values End */}
          </Grid>
        </Grid>
        {/* Trading End */}
      </Grid>
    </Layout>
    /* Layout End */
  );
}

/**
 * @description SSR Data Fetching
 * @author Luca Cattide
 * @export
 * @param {object} context Page context
 * @returns
 */
export async function getServerSideProps(context) {
  const responseTicker = await fetch('https://www.bitstamp.net/api/v2/ticker/btcusd');
  const responseCurrency = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=BTC');
  const responseSymbols = await fetch('https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD');
  const responseTradingPairs = await fetch('https://www.bitstamp.net/api/v2/trading-pairs-info');
  const dataTicker = await responseTicker.json();
  const dataCurrency = await responseCurrency.json();
  const dataSymbols = await responseSymbols.json();
  const dataTradingPairs = await responseTradingPairs.json();
  let averageTickerValues = 0;

  // Data check
  if (!dataTicker || ! dataCurrency || !dataSymbols || !dataTradingPairs) {
    return {
      notFound: true
    }
  }

  // It executes only if there are valid trading pairs data
  const responseInitialPair = await fetch(`https://www.bitstamp.net/api/v2/ticker/${dataTradingPairs[0].url_symbol}`);
  const dataInitialPair = await responseInitialPair.json();

  // Data check
  if (!dataInitialPair) {
    return {
      notFound: true
    }
  }

  /**
   * Average Ticker Values calculation
   * Assuming that basing it on a specific rate is not required
   * the average is calculated on all the rates
   * - Not sure if this is the right approach.
   * Params:
   * - Ticker: last
   * - Currency: rates (all)
   * - Symbols: all
   * Calculation
   * AVG = last BTC price + total currency rates + total symbol values /
   * 1 (BTC price) + N currency rates + N symbol values
   */
  dataSymbols[0].splice(0, 1);

  averageTickerValues = (
    Number(dataTicker.last) +
    Object.values(dataCurrency.data.rates)
    .reduce((total, value) => Number(total) + Number(value)) +
    dataSymbols[0].reduce((total, value) => total + value)
  ) / (
    1 +
    Object.keys(dataCurrency.data.rates).length +
    dataSymbols[0].length
  );

  return {
    props: {
      averageTickerValues,
      tradingPairs: dataTradingPairs,
      initialPair: dataInitialPair
    }
  };
}
