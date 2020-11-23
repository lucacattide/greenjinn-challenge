# GreenJinn Coding Challenge

## User Story

We are going to provide to the users a web page to check the current trading pairs from some cryptocurrency exchanges.
The page should have 2 columns:

- The first column, “average ticker values”, should on the right side should show a
value in the center which is the average between the response of these following APIs:

  - [Endpoint 1](https://www.bitstamp.net/api/v2/ticker/btcusd)
  - [Endpoint 2](https://api.coinbase.com/v2/exchange-rates?currency=BTC)
  - [Endpoint 3](https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD)
- The second column should have:
  - an area with buttons to select with the trading pairs provided by
[Endpoint 4](https://www.bitstamp.net/api/v2/trading-pairs-info/)
  - And an area below to display the numbers “well formatted” provide by ```https://www.bitstamp.net/api/v2/ticker/{currency_pair}/``` ​where currency_pair is the one selected by the user

### Further details

- It should be possible to switch to other trading pairs without reload the page
- It has to be “well formatted” on a mobile device (responsive): The “average ticker
values” area should be on top, followed by the “trading pairs button” and then
“selected trading values” pair.
- The web application should define and use 2 reusable UI components for every
displaying of numbers:
  - GJNumberLabel​, component that layouts the provided number and displays
the description for each of those;
  - GJNumbersView​, a component that takes:
    - title
    - a list of number-description couples and shows them in enough
GJNumberLabel.
- Feel free to add any of “visual improvements” to provide a better UI.

### Tech details

- Create a small frontend application using any framework to facilitate the assignment;
- Should be packaged using webpack, parcel or any other utility.
Delivery
- Provide code via git repository with multiple commits;
- Write a quick README on how to build/deploy and explain any choices you made during the development;
- Deploy the application on Netflify (free-tier) or similar services to be easily evaluated.

## Development Notes

- Features:
  - Responsiveness
  - SSR
  - State management
  - CSP
  - SEO
- NextJS as been selected as React framework for this challenge to get instant benefits of some features and speed up the process - such as Server-Side Rendering.
- The UI is managed with [Material-UI](https://github.com/mui-org/material-ui) in order to keep some visual consistency, following the Material Design principles. The provided mockup it has been strictly followed in layout terms. For this reason, some visual choices could seem 'unusual' for the general rendering. The template has been improved with an app Toolbar (Header) in the ```Layout``` component and the data is rendered inside proper Material Cards.
- Mobile and desktop resolutions are supported in the main popular breakpoints ([Bootstrap 4](https://bootstrapcreative.com/bootstrap-4-media-queries/) referenced)
- The starting data (ATV, selected trading pair) are fetched from the suggested APIs as the rest. The current selected pair is the first of the returned list
- The _Average Ticker Values_  is rendered in a dedicated ```Ticker``` component. It is calculated by the following formulae:

```
        Last BTC Price + Total currency rates + Total symbol values
  ATV = -----------------------------------------------------------
        1 (single BTC price) + N(currency rates) + N(symbol values)

  (Further details on source comments)
```

- Trading pairs buttons are managed with a proper ```TradingPairs``` component, which wraps them inside a carousel, in order to preserve the general layout with an animated pagination due to their quantity
- ```GJNumberViews``` takes an unrequested additional ```prop``` __loading__ just for UX purposes - It manages the UI placeholder state during the selected pair ```async``` fetching
- The project is optimized with proper meta-tags for SEO - OpenGraph supported - HTTP/2 best-practices and enhanced with structured data
- Content Security Policies are implemented for the project environment security
- Unit Testing of the main specifications with _Jest_ and _Enzyme_

More details are indicated inside the code comments - where needed.
For any further in-depth consideration, please contact me on info@lucacattide.dev or feel free to open an issue.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) merged with some custom configurations from my [next-boilerplate](https://github.com/lucacattide/next-boilerplate).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The production version is deployed on [Vercel (see)](https://greenjinn-challenge.lucacattide.vercel.app/).

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

You may alternatively use the following automated deploy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Flucacattide%2Fgreenjinn-challenge)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
