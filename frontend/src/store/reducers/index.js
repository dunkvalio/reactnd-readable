import { combineReducers } from 'redux';
import {
  FETCH_CATEGORIES_SUCCESS,
} from '../actions';

const categories = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      const { categories } = action;
      return {
        all: categories,
      };
    default:
      return state;
  }
}

export default combineReducers({
  categories,
});
