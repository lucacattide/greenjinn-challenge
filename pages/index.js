// Module Start
// JS imports
import {
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';
import Ticker from '../components/Ticker';
import TradingPairs from '../components/TradingPairs';
import GJNumbersView from '../components/GJNumber/GJNumbersView';

// Styles
const useStyles = makeStyles({
  container: {
    height: '100vh'
  }
});

/**
 * @description Index
 * @author Luca Cattide
 * @export
 * @returns
 */
export default function Index() {
  const classes = useStyles();

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
            className={classes.container}
          >
            <Grid item>
              <Ticker />
            </Grid>
          </Grid>
        </Grid>
        {/* ATV End */}
        {/* Trading Start */}
        <Grid item xs={12} md={6}>
          <Grid container>
            {/* Pairs Start */}
            <Grid item xs={12}>
              <TradingPairs />
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
                  <GJNumbersView title="Lorem ipsum" numbers={{
                    "high": "18977.00",
                    "last": "18656.32",
                    "timestamp": "1605952306",
                    "bid": "18656.32",
                    "vwap": "18593.19",
                    "volume": "9121.05925756",
                    "low": "18150.00",
                    "ask": "18664.12",
                    "open": "18685.08"
                  }} />
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
