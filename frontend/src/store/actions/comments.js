import * as api from '../../utils/api';
import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR,
} from '../constants';

export function fetchComments(id) {
  return dispatch => {
    api.getCommentsForPost(id)
      .then(data => dispatch({ type: FETCH_COMMENTS_SUCCESS, data }))
      .catch(error => dispatch({ type: FETCH_COMMENTS_ERROR }));
  };
}

export function postComment(postId, author, body) {
  return dispatch => {
    api.postComment(postId, author, body)
      .then(data => dispatch({ type: POST_COMMENT_SUCCESS, data }))
      .catch(error => dispatch({ type: POST_COMMENT_ERROR }));
  }
}

export function postCommentVote(commentId, vote) {
  return dispatch => {
    api.postCommentVote(commentId, vote);
  };
}

export function editComment(commentId, timestamp, body) {
  return dispatch => {
    api.putComment(commentId, timestamp, body);
  }
}

export function deleteComment(commentId) {
  return dispatch => {
    api.deleteComment(commentId);
  }
}