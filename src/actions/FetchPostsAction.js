import { types } from './types';
import axios from 'axios';

export const fetchPosts = () => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
