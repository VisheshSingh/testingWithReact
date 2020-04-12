import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';
import { findByTestAttr, checkProps } from '../../../utils';

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

  describe('Render Headline with props', () => {
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

  describe('Headline props in action', () => {
    test('Should render props without warnings', () => {
      const expectedProps = {
        fName: 'Test fName',
        lName: 'Test lName',
        email: 'test@gmail.com',
        age: 10,
        onlineStatus: false,
      };
      const propErr = checkProps(Headline, expectedProps);
      expect(propErr).toBeUndefined();
    });
  });
});
