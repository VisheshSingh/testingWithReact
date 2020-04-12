import checkPropTypes from 'check-prop-types';

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
