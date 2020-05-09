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
    let mockFn;
    beforeEach(() => {
      mockFn = jest.fn();
      const props = {
        buttonText: 'Example test',
        emitEvent: mockFn,
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    test('Should render a button', () => {
      const button = findByTestAttr(wrapper, 'btnComp');
      expect(button.length).toBe(1);
    });

    test('Should emit an event on click', () => {
      const button = findByTestAttr(wrapper, 'btnComp');
      button.simulate('click');
      const callback = mockFn.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
