import { types } from '../../actions/types';
import postsReducer from './reducer';

describe('Posts Reducer', () => {
  test('Should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  test('Should return a new state if receiving action type', () => {
    const posts = [
      { title: 'Title 1' },
      { title: 'Title 2' },
      { title: 'Title 3' },
    ];
    const newState = postsReducer(posts, { type: types.GET_POSTS });
    expect(newState).toEqual(posts);
  });
});
