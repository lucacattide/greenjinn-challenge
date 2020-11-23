// Module Start
// Utilities
// Fake Data
const fakePairs = [{
  "base_decimals": 8,
  "minimum_order": "25.0 USD",
  "name": "BTC/USD",
  "counter_decimals": 2,
  "trading": "Enabled",
  "url_symbol": "btcusd",
  "description": "Bitcoin / U.S. dollar"
}];
const fakePair = {
  "high": "18977.00",
  "last": "18656.32",
  "timestamp": "1605952306",
  "bid": "18656.32",
  "vwap": "18593.19",
  "volume": "9121.05925756",
  "low": "18150.00",
  "ask": "18664.12",
  "open": "18685.08"
};
const fakeState = {
  info: fakePairs[0],
  values: fakePair
};
// Setup
const setup = (container) => beforeEach(() => {
  // Setup a DOM element as a render target
  container = document.createElement('div');

  document.body.appendChild(container);
});
// Teardown
const teardown = (container) => afterEach(() => {
  // Cleanup on exiting
  unmountComponentAtNode(container);

  container.remove();

  container = null;
});
// Data Fetch Mock
const dataFetch = async (path) => {
  return fetch(path).then(res => res.json());
};

// Module export
export {
  fakePairs,
  fakePair,
  fakeState,
  setup,
  teardown,
  dataFetch
};
// Module End
