import * as api from '../../utils/api';
import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_ERROR } from '../constants';

export function fetchCategories() {
  return dispatch => {
    api.getCategories()
      .then(categories => dispatch({ type: FETCH_CATEGORIES_SUCCESS, categories }))
      .catch(error => dispatch({ type: FETCH_CATEGORIES_ERROR }));
  };
}