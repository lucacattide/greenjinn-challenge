// Module Start
// JS Imports
import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Index from '../pages/index';
import {
  fakePairs,
  fakePair
} from '../src/utils';

const index = <Index
  averageTickerValues={1}
  tradingPairs={fakePairs}
  initialPair={fakePair}
/>;

// Index Unit Testing
describe('Index unit test', () => {
  test('It renders the Index page without crashing', () => {
    let wrap = null;

    jest.spyOn(global, 'fetch').mockImplementation(() => () => {
      Promise.resolve({
        json: () => Promise.resolve([
          1,
          fakePairs,
          fakePair
        ])
      });
    });

    // Wrapping with rendering lifecycles too
    act(() => {
      wrap = mount(index);
    });

    expect(wrap.find('h6').text()).toBe('GreenJinn Challenge');

    // Remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
  });
});
// Module End
