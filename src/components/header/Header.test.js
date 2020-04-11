import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

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
    const wrapper = component.find('header');
    expect(wrapper.length).toBe(1);
  });

  test('Should render a logo with errors', () => {
    const wrapper = component.find('.logo');
    expect(wrapper.length).toBe(1);
  });
});
