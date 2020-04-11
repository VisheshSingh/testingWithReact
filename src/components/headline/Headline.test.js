import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';
import { findByTestAttr } from '../../../utils';

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline component', () => {
  describe('render Headline with props', () => {
    let component;

    beforeEach(() => {
      const props = {
        header: 'title',
        desc: 'description',
      };
      component = setup(props);
    });

    test('render header-container', () => {
      const wrapper = findByTestAttr(component, 'header-container');
      expect(wrapper.length).toBe(1);
    });

    test('should have h2', () => {
      const wrapper = findByTestAttr(component, 'title');
      expect(wrapper.length).toBe(1);
    });

    test('should have p', () => {
      const wrapper = findByTestAttr(component, 'description');
      expect(wrapper.length).toBe(1);
    });
  });

  describe('render Headline without props', () => {
    let component;
    beforeEach(() => {
      component = setup();
    });

    test('should not render header-container', () => {
      const wrapper = findByTestAttr(component, 'header-container');
      expect(wrapper.length).toBe(0);
    });

    test('should not have h2', () => {
      const wrapper = findByTestAttr(component, 'title');
      expect(wrapper.length).toBe(0);
    });

    test('should not have p', () => {
      const wrapper = findByTestAttr(component, 'description');
      expect(wrapper.length).toBe(0);
    });
  });
});
