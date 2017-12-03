import {
  FETCH_POSTS_SUCCESS,
  SORT_POSTS,
} from '../constants';

const defaultPosts = {
  posts: [],
  sortBy: 'voteScore',
  sortOptions: ['voteScore', 'timestamp', 'commentCount'],
};

const compareFunc = sortBy => (a, b) => {
  if (a[sortBy] < b[sortBy]) return 1;
  if (a[sortBy] > b[sortBy]) return -1;
  return 0;
};

export default (state = defaultPosts, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts.sort(compareFunc(state.sortBy)),
      };
    case SORT_POSTS:
      const { sortBy } = action;
      return {
        ...state,
        sortBy,
        posts: Array.of(...state.posts).sort(compareFunc(sortBy)),
      };
    default:
      return state;
  }
};

