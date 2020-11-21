// Module Start
// JS imports
import {
  Card,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Styles
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

// Ticker
const Ticker = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader subheader="Average Ticker Values" />
      <CardContent>
        <Typography variant="h5">100</Typography>
      </CardContent>
    </Card>
  );
};

// Module export
export default Ticker;
// Module End
