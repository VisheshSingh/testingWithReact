import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Headr component 🎃', () => {
  test('Should render a Header', () => {
    const wrapper = shallow(<Header />);
    console.log(wrapper.debug());
    const component = wrapper.find('header');
    expect(component.length).toBe(1);
  });
});
