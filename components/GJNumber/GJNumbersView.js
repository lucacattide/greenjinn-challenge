// Module Start
// JS imports
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GJNumberLabel from './GJNumberLabel';

// Styles
const useStyles = makeStyles({
  button: {
    margin: 16
  },
  card: {
    margin: '2em 0 0'
  },
  number: {
    margin: '1em 0'
  }
});

// Numbers View
const GJNumbersView = (props) => {
  const {title, numbers} = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={title} />
      {/* Content Start */}
      <CardContent>
        <Grid container justify="center">
          {Object.keys(numbers).map((key, i) => (
            <Grid
              item
              className={classes.number}
              xs={12}
              sm={4}
              key={`${key}-${i}`}
            >
              <GJNumberLabel
                label={key}
                value={Number(numbers[key]).toFixed(2)}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      {/* Content End */}
    </Card>
  );
};

// Properties Validation
GJNumbersView.propTypes = {
  title: PropTypes.string.isRequired,
  numbers: PropTypes.object.isRequired
};

// Module export
export default GJNumbersView;
// Module End
