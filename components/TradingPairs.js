// Module Start
// JS imports
import PropTypes from 'prop-types';
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

// Trading Pairs
const TradingPairs = (props) => {
  const {tradingPairs, pair, selectedPair} = props;
  const classes = useStyles();
  // Pair handler
  const handlePair = (pair) => {
    selectedPair(pair);
  };

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
              {tradingPairs.map((tradingPair) => (
                <SwiperSlide key={tradingPair.url_symbol}>
                  <Grid item xs={3}>
                    <Button
                      data-button='pari-button'
                      className={classes.button}
                      variant="contained"
                      color={tradingPair.name === pair.info.name ?
                        'secondary':
                        'primary'
                      }
                      onClick={() => handlePair(tradingPair)}
                    >
                      {tradingPair.name}
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

// Properties Validation
TradingPairs.propTypes = {
  tradingPairs: PropTypes.array.isRequired,
  pair: PropTypes.object.isRequired,
  selectedPair: PropTypes.func.isRequired
};

// Module export
export default TradingPairs;
// Module End
