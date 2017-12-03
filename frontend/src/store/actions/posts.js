import * as api from '../../utils/api';
import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POST_DETAILS_SUCCESS,
  FETCH_POST_DETAILS_ERROR,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  SORT_POSTS,
} from '../constants';

export function fetchPosts(category) {
  if (category) {
    return dispatch => {
      api.getPostsByCategory(category)
        .then(posts => dispatch({ type: FETCH_POSTS_SUCCESS, posts }))
        .catch(error => dispatch({ type: FETCH_POSTS_ERROR }));
    };
  } else {
    return dispatch => {
      api.getPosts()
        .then(posts => dispatch({ type: FETCH_POSTS_SUCCESS, posts }))
        .catch(error => dispatch({ type: FETCH_POSTS_ERROR }));
    };
  }
}

export function fetchPostById(id) {
  return dispatch => {
    api.getPostById(id)
      .then(data => dispatch({ type: FETCH_POST_DETAILS_SUCCESS, data }))
      .catch(error => dispatch({ type: FETCH_POST_DETAILS_ERROR }));
  };
}

export function createPost(author, title, body, category) {
  return dispatch => {
    api.postPost(author, title, body, category)
      .then(() => dispatch({ type: CREATE_POST_SUCCESS }))
      .catch(() => dispatch({ type: CREATE_POST_ERROR }));
  }
}

export function updatePost(id, title, body) {
  return dispatch => {
    api
      .putPost(id, title, body)
      .then(() => dispatch({ type: EDIT_POST_SUCCESS }))
      .catch(() => dispatch({ type: EDIT_POST_ERROR }));
  };
}

export function sortPosts(sortBy) {
  return dispatch => {
    dispatch({ type: SORT_POSTS, sortBy });
  };
}

export function postPostVote(postId, vote) {
  return dispatch => {
    api.postPostVote(postId, vote);
  };
}

export function deletePost(id) {
  return dispatch => {
    api.deletePost(id);
  };
}
