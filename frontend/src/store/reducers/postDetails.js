import { FETCH_POST_DETAILS_SUCCESS } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST_DETAILS_SUCCESS:
      return { ...action.data };
    default:
      return state;
  }
};
