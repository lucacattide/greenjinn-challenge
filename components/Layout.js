// Module Start
// JS imports
import {
  Container,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  makeStyles
} from '@material-ui/core/styles';

// Styles
const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: '5em 0 0'
  }
}));
// Layout
const Layout = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            GreenJinn Challenge
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        {props.children}
      </main>
    </Container>
  );
};

// Module export
export default Layout;
// Module End
