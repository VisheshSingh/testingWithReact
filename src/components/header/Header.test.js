import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttr } from '../../../utils';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component 🎃', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  test('Should render a Header with errors', () => {
    const wrapper = findByTestAttr(component, 'header');
    expect(wrapper.length).toBe(1);
  });

  test('Should render a logo with errors', () => {
    const wrapper = findByTestAttr(component, 'logo');
    expect(wrapper.length).toBe(1);
  });
});
