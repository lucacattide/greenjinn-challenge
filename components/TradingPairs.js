// Module Start
// JS imports
import {
  Slide,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles
const useStyles = makeStyles({
  button: {
    margin: 16
  },
  carousel: {
    minHeight: '8em'
  }
});

// Swiper configuration
SwiperCore.use([
  Pagination
]);

const pairs = [{
  "base_decimals": 8,
  "minimum_order": "25.0 USD",
  "name": "BTC/USD",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "btcusd",
  "description": "Bitcoin / U.S. dollar"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 EUR",
  "name": "BTC/EUR",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "btceur",
  "description": "Bitcoin / Euro"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 GBP",
  "name": "BTC/GBP",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "btcgbp",
  "description": "Bitcoin / British Pound"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 PAX",
  "name": "BTC/PAX",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "btcpax",
  "description": "Bitcoin / Paxos Standard"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 USDC",
  "name": "BTC/USDC",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "btcusdc",
  "description": "Bitcoin / USD Coin"
}, {
  "base_decimals": 5,
  "minimum_order": "25.0 USD",
  "name": "GBP/USD",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "gbpusd",
  "description": "British Pound / U.S. dollar"
}, {
  "base_decimals": 5,
  "minimum_order": "25.0 EUR",
  "name": "GBP/EUR",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "gbpeur",
  "description": "British Pound / Euro"
}, {
  "base_decimals": 5,
  "minimum_order": "25.0 USD",
  "name": "EUR/USD",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "eurusd",
  "description": "Euro / U.S. dollar"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 USD",
  "name": "XRP/USD",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "xrpusd",
  "description": "XRP / U.S. dollar"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 EUR",
  "name": "XRP/EUR",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "xrpeur",
  "description": "XRP / Euro"
}, {
  "base_decimals": 8,
  "minimum_order": "0.001 BTC",
  "name": "XRP/BTC",
  "counter_decimals": 8,
  "trading": "Enabled",
  "url_symbol": "xrpbtc",
  "description": "XRP / Bitcoin"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 GBP",
  "name": "XRP/GBP",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "xrpgbp",
  "description": "XRP / British Pound"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 PAX",
  "name": "XRP/PAX",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "xrppax",
  "description": "XRP / Paxos Standard"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 USD",
  "name": "LTC/USD",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "ltcusd",
  "description": "Litecoin / U.S. dollar"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 EUR",
  "name": "LTC/EUR",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "ltceur",
  "description": "Litecoin / Euro"
}, {
  "base_decimals": 8,
  "minimum_order": "0.001 BTC",
  "name": "LTC/BTC",
  "counter_decimals": 8,
  "trading": "Enabled",
  "url_symbol": "ltcbtc",
  "description": "Litecoin / Bitcoin"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 GBP",
  "name": "LTC/GBP",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "ltcgbp",
  "description": "Litecoin / British Pound"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 USD",
  "name": "ETH/USD",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "ethusd",
  "description": "Ether / U.S. dollar"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 EUR",
  "name": "ETH/EUR",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "etheur",
  "description": "Ether / Euro"
}, {
  "base_decimals": 8,
  "minimum_order": "0.001 BTC",
  "name": "ETH/BTC",
  "counter_decimals": 8,
  "trading": "Enabled",
  "url_symbol": "ethbtc",
  "description": "Ether / Bitcoin"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 GBP",
  "name": "ETH/GBP",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "ethgbp",
  "description": "Ether / British Pound"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 PAX",
  "name": "ETH/PAX",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "ethpax",
  "description": "Ether / Paxos Standard"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 USDC",
  "name": "ETH/USDC",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "ethusdc",
  "description": "Ether / USD Coin"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 USD",
  "name": "BCH/USD",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "bchusd",
  "description": "Bitcoin Cash / U.S. dollar"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 EUR",
  "name": "BCH/EUR",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "bcheur",
  "description": "Bitcoin Cash / Euro"
}, {
  "base_decimals": 8,
  "minimum_order": "0.001 BTC",
  "name": "BCH/BTC",
  "counter_decimals": 8,
  "trading": "Enabled",
  "url_symbol": "bchbtc",
  "description": "Bitcoin Cash / Bitcoin"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 GBP",
  "name": "BCH/GBP",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "bchgbp",
  "description": "Bitcoin Cash / British Pound"
}, {
  "base_decimals": 5,
  "minimum_order": "25.0 USD",
  "name": "PAX/USD",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "paxusd",
  "description": "Paxos Standard / U.S. dollar"
}, {
  "base_decimals": 5,
  "minimum_order": "25.0 EUR",
  "name": "PAX/EUR",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "paxeur",
  "description": "Paxos Standard / Euro"
}, {
  "base_decimals": 5,
  "minimum_order": "25.0 GBP",
  "name": "PAX/GBP",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "paxgbp",
  "description": "Paxos Standard / British Pound"
}, {
  "base_decimals": 8,
  "minimum_order": "0.001 BTC",
  "name": "XLM/BTC",
  "counter_decimals": 8,
  "trading": "Enabled",
  "url_symbol": "xlmbtc",
  "description": "Stellar Lumens / Bitcoin"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 USD",
  "name": "XLM/USD",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "xlmusd",
  "description": "Stellar Lumens / U.S. dollar"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 EUR",
  "name": "XLM/EUR",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "xlmeur",
  "description": "Stellar Lumens / Euro"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 GBP",
  "name": "XLM/GBP",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "xlmgbp",
  "description": "Stellar Lumens / British Pound"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 USD",
  "name": "LINK/USD",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "linkusd",
  "description": "Chainlink / U.S. dollar"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 EUR",
  "name": "LINK/EUR",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "linkeur",
  "description": "Chainlink / Euro"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 GBP",
  "name": "LINK/GBP",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "linkgbp",
  "description": "Chainlink / British Pound"
}, {
  "base_decimals": 8,
  "minimum_order": "0.001 BTC",
  "name": "LINK/BTC",
  "counter_decimals": 8,
  "trading": "Enabled",
  "url_symbol": "linkbtc",
  "description": "Chainlink / Bitcoin"
}, {
  "base_decimals": 8,
  "minimum_order": "0.02 ETH",
  "name": "LINK/ETH",
  "counter_decimals": 8,
  "trading": "Enabled",
  "url_symbol": "linketh",
  "description": "Chainlink / Ether"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 USD",
  "name": "OMG/USD",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "omgusd",
  "description": "OMG Network / U.S. dollar"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 EUR",
  "name": "OMG/EUR",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "omgeur",
  "description": "OMG Network / Euro"
}, {
  "base_decimals": 8,
  "minimum_order": "25.0 GBP",
  "name": "OMG/GBP",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "omggbp",
  "description": "OMG Network / British Pound"
}, {
  "base_decimals": 8,
  "minimum_order": "0.001 BTC",
  "name": "OMG/BTC",
  "counter_decimals": 8,
  "trading": "Enabled",
  "url_symbol": "omgbtc",
  "description": "OMG Network / Bitcoin"
}, {
  "base_decimals": 5,
  "minimum_order": "25.0 USD",
  "name": "USDC/USD",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "usdcusd",
  "description": "USD Coin / U.S. dollar"
}, {
  "base_decimals": 5,
  "minimum_order": "25.0 EUR",
  "name": "USDC/EUR",
  "counter_decimals": 5,
  "trading": "Enabled",
  "url_symbol": "usdceur",
  "description": "USD Coin / Euro"
}];

// Trading Pairs
const TradingPairs = () => {
  const classes = useStyles();

  return (
    <Slide
      direction="up"
      in={true}
      mountOnEnter
      unmountOnExit
      timeout={{
        enter: 300,
        exit: 250
      }}
    >
      <Card className={classes.card}>
        <CardHeader subheader="Trading Pairs" />
        <CardContent>
          <Grid container justify="center" className={classes.carousel}>
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 2
                },
                768: {
                  slidesPerView: 3
                }
              }}
            >
              {pairs.map((pair) => (
                <SwiperSlide key={pair.url_symbol}>
                  <Grid item xs={3}>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                    >
                      {pair.name}
                    </Button>
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </CardContent>
      </Card>
    </Slide>
  );
};

// Module export
export default TradingPairs;
// Module End
