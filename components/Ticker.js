// Module Start
// JS imports
import PropTypes from 'prop-types';
import {
  Slide,
  Card,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';
import { Update } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

// Styles
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  flexItem: {
    display: 'flex'
  },
  margin: {
    margin: '1em 0 0'
  },
  updateIcon: {
    margin: '0 16px 0 0'
  }
});

// Ticker
const Ticker = (props) => {
  const {atv} = props;
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
        <CardHeader subheader="Average Ticker Values" />
        <CardContent>
          <Typography variant="h4">฿ {atv.toFixed(2)}</Typography>
          <Typography
            variant="body2"
            className={
              `${classes.margin} ${classes.flexItem}`
            }
          >
            <Update
              fontSize="small"
              className={classes.updateIcon}
            />
              {`Last update: ${moment().format('MM/DD/YYYY')}`}
          </Typography>
        </CardContent>
      </Card>
    </Slide>
  );
};

// Properties Validation
Ticker.propTypes = {
  atv: PropTypes.number.isRequired
};

// Module export
export default Ticker;
// Module End
