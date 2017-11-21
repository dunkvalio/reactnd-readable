import * as api from '../../utils/api';

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_SUCCESS';

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export function fetchCategories() {
  return dispatch => {
    api.getCategories()
      .then(categories => dispatch({ type: FETCH_CATEGORIES_SUCCESS, categories }))
      .catch(error => dispatch({ type: FETCH_CATEGORIES_ERROR }));
  };
}

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