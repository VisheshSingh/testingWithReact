import { testStore } from '../../utils';
import moxios from 'moxios';
import { fetchPost } from '../actions/FetchPostsAction';

describe('fetch posts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('store is updated correctly', () => {
    const expectedState = [
      {
        title: 'Title1',
        body: 'Body1',
      },
      {
        title: 'Title2',
        body: 'Body2',
      },
      {
        title: 'Title3',
        body: 'Body3',
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 202,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPost()).then(() => {
      const newState = store.getState();
      expectedState(newState.posts).toBe(expectedState);
    });
  });
});
