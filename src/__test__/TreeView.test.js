import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Custom Modules
import TreeView, { TreeItem } from '@/components/TreeView';
import * as itemsAPI from '@/utils/itemsAPI';

// Test Data
import mockData from './_mockData';


/**
* Setup
*/
let mockItem = mockData.items.items[0];

configure({ adapter: new Adapter() });

beforeEach(() => {

  // Mock Fetch
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
* TreeView: Tests
*/
describe('<TreeView /> Component', () => {

  it('It receives all the necessary props', async () => {

    const initialResponse = await itemsAPI.getAll();
    const wrapper = shallow(
      <TreeView
        items={ initialResponse.items }
        heading="Custom Title"
      />
    );

    expect(wrapper.instance().props).toEqual({
      heading: 'Custom Title',
      items: mockData.items,
    });

  });


  it('should render the component Header in the DOM when a heading is provided', async () => {
    const testTitle = 'Test Component Title';
    // const initialResponse = await itemsAPI.getAll();
    const initialResponse = mockData;
    const wrapper = shallow(
      <TreeView
        items={ initialResponse.items }
        heading={ testTitle }
      />
    );

    // Header element should be rendered and it should have the appropiate content.
    expect(wrapper.find('.c-tree-view__nodes-header').exists()).toEqual(true);
    expect(wrapper.find('.c-tree-view__title').text()).toEqual(testTitle);

  });


  it('should not render the component Header if it wasn\'t provided', async () => {
    // const initialResponse = await itemsAPI.getAll();
    const initialResponse = mockData;
    const wrapper = shallow(<TreeView items={ initialResponse.items } />);

    // Header element should not exist in the DOM if the `heading` prop is empty.
    expect(wrapper.find('.c-tree-view__nodes-header').exists()).toEqual(false);

  });


  it('should render a <TreeView /> component with one <TreeItem /> child', async () => {
    // const initialResponse = await itemsAPI.getAll();
    const initialResponse = mockData;
    const wrapper = shallow(<TreeView items={ initialResponse.items } />);

    expect(wrapper.find(TreeItem)).toHaveLength(1);

  });

});



/**
* TreeItem: Tests
*/
describe('<TreeItem /> Sub-Component', () => {

  it('should render one child item expanded by default', () => {
    const wrapper = shallow(<TreeItem {...mockItem } />);

    expect(wrapper.state().isExpanded).toEqual(true);
    expect(wrapper.find('.c-tree-view__item').hasClass('is-expanded')).toEqual(true);

  });


  it('should toggle the state to be Collapsed/Expanded when the title is clicked', () => {
    const wrapper = shallow(<TreeItem {...mockItem } />);

    // Click the title element once in order to Collapse the panel.
    wrapper.find('.c-tree-view__item-title').simulate('click');
    expect(wrapper.state().isExpanded).toEqual(false);
    expect(wrapper.find('.c-tree-view__item').hasClass('is-expanded')).toEqual(false);

    // Click the title element one more time in order to Expand the panel.
    wrapper.find('.c-tree-view__item-title').simulate('click');
    expect(wrapper.state().isExpanded).toEqual(true);
    expect(wrapper.find('.c-tree-view__item').hasClass('is-expanded')).toEqual(true);

  });

});
