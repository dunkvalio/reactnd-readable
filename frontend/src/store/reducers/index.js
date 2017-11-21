import { combineReducers } from 'redux';
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
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
    case FETCH_POSTS_ERROR:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  categories, posts
});
