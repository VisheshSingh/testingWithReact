import React from 'react';
import { findByAttr, checkProps } from '../../../utils/';
import ListItem from './ListItem';

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
});
