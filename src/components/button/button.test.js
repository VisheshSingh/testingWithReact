import React from 'react';
import { findByTestAttr, checkProps } from '../../../utils/';
import SharedButton from './index';

describe('Shared button component', () => {
  test('Should NOT throw a warning', () => {
    const expectedProps = {
      buttonText: 'Example btn text',
      emitEvent() {},
    };

    const propsError = checkProps(SharedButton, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
