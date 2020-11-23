// Jest - Setup
const {
  JSDOM
} = require('jsdom');
const dom = new JSDOM();

global.fetch = require('jest-fetch-mock');

import {
  configure
} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({
  adapter: new Adapter()
});
