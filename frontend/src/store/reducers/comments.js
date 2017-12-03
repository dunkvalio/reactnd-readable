import {
  FETCH_COMMENTS_SUCCESS,
  POST_COMMENT_SUCCESS,
} from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return action.data;
    case POST_COMMENT_SUCCESS:
      return state.concat(action.data);
    default:
      return state;
  }
};
