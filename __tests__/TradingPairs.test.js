// Module Start
// JS imports
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import TradingPairs from '../components/TradingPairs';
import GJNumbersView from '../components/GJNumber/GJNumbersView';
import {
  fakePairs,
  fakePair,
  fakeState,
  dataFetch
} from '../src/utils';

const handleSelectedPair = jest.fn();
const tradingPairs = <TradingPairs
  tradingPairs={fakePairs}
  pair={fakeState}
  selectedPair={handleSelectedPair}
/>;
const gjNumbersView = <GJNumbersView
  title={fakePairs[0].description}
  numbers={fakePair}
  loading={false}
/>

// Data Fetching Unit Test
describe('Data fetching test', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('It gets the selected pair', () => {
    const wrapper = mount(tradingPairs);
    const onResponse = jest.fn();
    const onError = jest.fn();

    wrapper.find('[data-button]').at(0).simulate('click');

    // Wrapping with rendering lifecycles too
    act(() => {
      fetch.mockResponseOnce(JSON.stringify(fakePair));
    });

    return dataFetch(`https://www.bitstamp.net/api/v2/ticker/${fakePairs[0].url_symbol}`)
    .then(onResponse).catch(onError).finally(() => {
      expect(onResponse).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
      expect(onResponse.mock.calls[0][0]).toEqual(fakePair);
    });
  });
});
