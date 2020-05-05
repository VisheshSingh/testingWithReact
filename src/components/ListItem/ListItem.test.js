import React from 'react';
import { findByAttr, checkProps, findByTestAttr } from '../../../utils/';
import ListItem from './ListItem';
import { shallow } from 'enzyme';

describe('ListItem component', () => {
  describe('Checking PropTypes', () => {
    test('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Example title',
        desc: 'description',
      };

      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Component renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Title',
        desc: 'Description',
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    test('Should render wrapper without errors', () => {
      const component = findByTestAttr(wrapper, 'listComponent');
      expect(component.length).toBe(1);
    });
    test('Should render title without errors', () => {
      const title = findByTestAttr(wrapper, 'title');
      expect(title.length).toBe(1);
    });
    test('Should render desc without errors', () => {
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });
});
