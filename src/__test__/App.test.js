import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

// Custom Modules
import App from '../App';
import * as itemsAPI from '../utils/itemsAPI';

// Test Data
import mockData from './_mockData';


/**
* Setup
*/
configure({ adapter: new Adapter() });

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        ok: true,
        json: () => (mockData)
      });
    });
  });
});


/**
* App: Tests
*/
describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });


  it('It Fetches the items data from the API. The data its saved in the `state` once is ready.', async () => {
    const initialResponse = await itemsAPI.getAll();
    const wrapper = mount(<App />);

    itemsAPI.getAll().then(() => {
      expect(wrapper.state().items).toEqual(initialResponse.items);
    });

  });

});
