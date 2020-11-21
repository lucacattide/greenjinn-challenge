// Module Start
// JS imports
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

/**
 * @description GreenJinn App
 * @author Luca Cattide
 * @export
 * @param {object} props Properties
 * @returns
 */
export default function GreenJinn(props) {
  const {Component, pageProps} = props;

  useEffect(() => {
    // Remove the server-side injected CSS to run Material-UI on SSR properly
    const jssStyles = document.querySelector('#jss-server-side');

    // Style check
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      {/* Head Start */}
      <Head>
        <title>GreenJinn Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Head End */}
      {/* Theme Start */}
      <ThemeProvider theme={theme}>
        {/* CSS Reset */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      {/* Theme End */}
    </>
  );
}

// Properties Validation
GreenJinn.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
// Module End
