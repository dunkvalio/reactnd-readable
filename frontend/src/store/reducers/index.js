import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';
import comments from './comments';
import postDetails from './postDetails';

export default combineReducers({
  categories, posts, postDetails, comments,
});
