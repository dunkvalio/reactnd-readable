import * as api from '../../utils/api';

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_SUCCESS';

export function fetchCategories() {
  return (dispatch) => {
    api.fetchCategories()
      .then(
        categories => dispatch({
          type: FETCH_CATEGORIES_SUCCESS,
          categories
        }))
      .catch(error => dispatch({ type: FETCH_CATEGORIES_ERROR }));
  };
}
