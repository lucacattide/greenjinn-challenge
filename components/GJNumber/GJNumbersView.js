// Module Start
// JS imports
import PropTypes from 'prop-types';
import {
  Slide,
  Card,
  CardHeader,
  CardContent,
  Grid
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
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
  },
  placeholder: {
    margin: 16
  }
});

// Numbers View
const GJNumbersView = (props) => {
  const {title, numbers, loading} = props;
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
        {loading ?
          <Skeleton variant="text" className={classes.placeholder} /> :
          <CardHeader title={title} />
        }
        {/* Content Start */}
        <CardContent>
          {loading ?
            <Grid container justify="center">
              <Skeleton variant="rect" width={552} height={260} />
            </Grid> :
            <Grid container justify="center">
              {Object.keys(numbers).map((key, i) => (
                <Grid
                  item
                  className={classes.number}
                  xs={12}
                  sm={4}
                  md={6}
                  lg={4}
                  key={`${key}-${i}`}
                >
                  <GJNumberLabel
                    label={key}
                    value={numbers[key]}
                  />
                </Grid>
              ))}
            </Grid>
          }
        </CardContent>
        {/* Content End */}
      </Card>
    </Slide>
  );
};

// Properties Validation
GJNumbersView.propTypes = {
  title: PropTypes.string.isRequired,
  numbers: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

// Module export
export default GJNumbersView;
// Module End
