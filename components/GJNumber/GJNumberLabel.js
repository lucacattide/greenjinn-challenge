// Module Start
// JS imports
import PropTypes from 'prop-types';
import {
  Grid,
  Typography
} from '@material-ui/core';

// Number Label
const GJNumberLabel = (props) => {
  const {label, value} = props;

  return (
    <Grid container alignItems="center" direction="column">
      {/* Value Start */}
      <Typography variant="h5">
        {value}
      </Typography>
      {/* Value End */}
      {/* Label Start */}
      <Typography variant="subtitle1">
        {label}
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
