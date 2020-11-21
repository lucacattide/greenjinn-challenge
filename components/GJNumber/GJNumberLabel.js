// Module Start
// JS imports
import PropTypes from 'prop-types';
import {
  Grid,
  Typography
} from '@material-ui/core';
import moment from 'moment';

// Number Label
const GJNumberLabel = (props) => {
  const {label, value} = props;
  // Label handler
  const handleLabel = () => {
    let field = '';

    switch(label) {
      case 'high':
        field = 'Last 24h price high';
        break;

      case 'last':
        field = 'Last BTC price';
        break;

      case 'bid':
        field = 'Highest buy order';
        break;

      case 'vwap':
        field = 'Last 24h volume weighted average price';
        break;

      case 'volume':
        field = 'Last 24h volume';
        break;

      case 'low':
        field = 'Last 24h price low';
        break;

      case 'ask':
        field = 'Lowest sell order';
        break;

      case 'open':
        field = '1st price of the day';
        break;

      case 'timestamp':
        field = 'Timestamp';
        break;

      default:
    }

    return field;
  };

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
    >
      {/* Value Start */}
      <Typography variant="h5">
        {label !== 'timestamp' ?
          `฿ ${Number(value).toFixed(2)}` :
          moment.unix(value).format('MM/DD/YYYY')
        }
      </Typography>
      {/* Value End */}
      {/* Label Start */}
      <Typography variant="body2" align="center">
        {handleLabel()}
      </Typography>
      {/* Label End */}
    </Grid>
  );
};

// Properties Validation
GJNumberLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

// Module export
export default GJNumberLabel;
// Module End
