import * as api from '../../utils/api';

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_SUCCESS';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export const FETCH_POST_DETAILS_SUCCESS = 'FETCH_POST_DETAILS_SUCCESS';
export const FETCH_POST_DETAILS_ERROR = 'FETCH_POST_DETAILS_ERROR';

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR';

export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const POST_COMMENT_ERROR = 'POST_COMMENT_ERROR';

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_ERROR = 'EDIT_POST_ERROR';

export const SORT_POSTS = 'SORT_POSTS';

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

export function fetchPostById(id) {
  return dispatch => {
    api.getPostById(id)
      .then(data => dispatch({ type: FETCH_POST_DETAILS_SUCCESS, data }))
      .catch(error => dispatch({ type: FETCH_POST_DETAILS_ERROR }));
  };
}

export function fetchCommentsForPost(id) {
  return dispatch => {
    api.getCommentsForPost(id)
      .then(data => dispatch({ type: FETCH_COMMENTS_SUCCESS, data }))
      .catch(error => dispatch({ type: FETCH_COMMENTS_ERROR }));
  };
}

export function postComment(postId, author, body) {
  return dispatch => {
    api.postComment(postId, author, body)
      .then(data => dispatch({ type: POST_COMMENT_SUCCESS, data }))
      .catch(error => dispatch({ type: POST_COMMENT_ERROR }));
  }
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
    api.putPost(id, title, body)
      .then(() => dispatch({ type: EDIT_POST_SUCCESS }))
      .catch(() => dispatch({ type: EDIT_POST_ERROR }));
  }
}

export function sortPosts(sortBy) {
  return dispatch => {
    dispatch({ type: SORT_POSTS, sortBy});
  }
}

export function postPostVote(postId, vote) {
  return dispatch => {
    api.postPostVote(postId, vote);
  }
}

export function deletePost(id) {
  return dispatch => {
    api.deletePost(id);
  }
}
