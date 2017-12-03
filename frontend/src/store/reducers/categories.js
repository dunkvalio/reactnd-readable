import { FETCH_CATEGORIES_SUCCESS } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.categories;
    default:
      return state;
  }
};
