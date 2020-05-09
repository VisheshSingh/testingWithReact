import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr, testStore } from '../utils';

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  console.log(wrapper.debug());
  return wrapper;
};

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    let initialState = {
      posts: [
        {
          title: 'title 1',
          body: 'body 1',
          id: 1,
        },
        {
          title: 'title 2',
          body: 'body 2',
          id: 2,
        },
      ],
    };
    wrapper = setup(initialState);
  });

  test('Should render without any errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});
