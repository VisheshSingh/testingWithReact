import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import RootReducer from '../src/reducers';
import { middlewares } from '../src/createStore';

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propErr = checkPropTypes(
    component.props,
    expectedProps,
    'props',
    component.name
  );
  return propErr;
};

export const testStore = (initialState) => {
  const createStoreMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreMiddleware(RootReducer, initialState);
};
