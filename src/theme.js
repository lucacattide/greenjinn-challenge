// Module Start
// JS Imports
import { createMuiTheme } from '@material-ui/core/styles';

// Theme
const contrastText = '#212121';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62af6f',
      main: '#317f43',
      dark: '#00521a',
      contrastText: contrastText
    },
    secondary: {
      light: '#ffff52',
      main: '#fad201',
      dark: '#c2a100',
      contrastText: contrastText
    }
  }
});

// Module export
export default theme;
// Module End
