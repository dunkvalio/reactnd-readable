import { combineReducers } from 'redux';
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_DETAILS_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
  POST_COMMENT_SUCCESS,
} from '../actions';

const categories = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return { all: action.categories };
    default:
      return state;
  }
}

const posts = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { posts: action.posts };
    default:
      return state;
  }
};

const postDetails = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST_DETAILS_SUCCESS:
      return { post: action.data };
    default:
      return state;
  }
};

const defaultComments = {
  data: [],
  inProgress: {},
};

const comments = (state = defaultComments, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, data: action.data };
    case POST_COMMENT_SUCCESS:
      return { ...state, data: state.data.concat(action.data) };
    default:
      return state;
  }
};

export default combineReducers({
  categories, posts, postDetails, comments,
});
