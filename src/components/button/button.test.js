import React from 'react';
import { findByTestAttr, checkProps } from '../../../utils/';
import SharedButton from './index';
import { shallow } from 'enzyme';

describe('Shared button component', () => {
  test('Should NOT throw a warning', () => {
    const expectedProps = {
      buttonText: 'Example btn text',
      emitEvent() {},
    };

    const propsError = checkProps(SharedButton, expectedProps);
    expect(propsError).toBeUndefined();
  });

  describe('', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example test',
        emitEvent() {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    test('Should render a button', () => {
      const button = findByTestAttr(wrapper, 'btnComp');
      expect(button.length).toBe(1);
    });
  });
});
