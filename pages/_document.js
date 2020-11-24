// Module Start
// JS imports
import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

/**
 * @description Document - Override
 * @author Luca Cattide
 * @export
 * @class GreenJinnDocument
 * @extends {Document}
 */
export default class GreenJinnDocument extends Document {
  /**
   * @description Rendering
   * @author Luca Cattide
   * @returns
   * @memberof GreenJinnDocument
   */
  render() {
    const csp = `default-src 'none'; prefetch-src 'self'; script-src 'self' www.google.com 'unsafe-eval' 'unsafe-inline'; style-src 'self' fonts.googleapis.com 'unsafe-inline'; connect-src 'self' cors-anywhere.herokuapp.com www.bitstamp.net www.google.com localhost; font-src 'self' fonts.googleapis.com fonts.gstatic.com data:; img-src 'self' data: localhost;`;

    return (
      <Html lang="en" prefix="og: http://ogp.me/ns#">
        {/* head Start */}
        <Head>
          {/* PWA primary color */}
          {/* Meta Tags Start */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv='Content-Security-Policy' content={csp} />
          <meta name="keywords" content="greenjinn challenge luca cattide" />
          <meta name="description" content="GreenJinn coding challenge by Luca Cattide" />
          <meta name="og:site_name" property="og:site_name" content="GreenJinn Challenge" />
          <meta name="og:title" property="og:title" content="GreenJinn Challenge" />
          <meta name="og:description" property="og:description" content="GreenJinn coding challenge by Luca Cattide" />
          <meta name="og:type" property="og:type" content="website" />
          <meta name="og:locale" property="og:locale" content="en-GB" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* Meta Tags End */}
          {/* Preload Start */}
          <link rel="preload" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" as="style" crossOrigin="anonymous" />
          {/* Preload End */}
          {/* CSS Imports Start */}
          <link rel="stylesheet dns-prefetch" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" crossOrigin="anonymous" />
          {/* CSS Imports End */}
          <link rel="icon dns-prefetch" type="image/png" href="/favicon.png" />
        </Head>
        {/* Head End */}
        {/* Body Start */}
        <body>
          <Main />
          {/* JS Imports Start */}
          <NextScript />
          {/* JS Imports End */}
          {/* Rich Snippets Start */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "http://schema.org",
              "@graph": [{
                "@type": "Organization",
                "url": "https://https://www.greenjinn.com/",
                "name": "GreenJinn"
              }, {
                "@type": "WebSite",
                "name": "GreenJinn",
                "url": "https://greenjinn.com"
              }]
            }
          `}} />
          {/* Rich Snippets End */}
        </body>
        {/* Body End */}
      </Html>
    );
  }
}

// Props initialization
GreenJinnDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Material-UI workaround
    // Styles fragment is rendered after the app and page rendering finish
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  };
};
