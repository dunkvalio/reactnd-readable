import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  fetchPostById,
  fetchCommentsForPost,
  postComment,
  deletePost,
  postPostVote,
  postCommentVote,
  editComment,
  deleteComment,
} from "../../store/actions";
import PostDetails from './PostDetails';

class PostDetailsContainer extends Component {
  componentDidMount() {
    this.refreshPost();
    this.refreshComments();
  }

  refreshPost = () => {
    this.props.getPostDetails(this.props.match.params.post_id);
  };

  refreshComments = () => {
    this.props.getComments(this.props.match.params.post_id);
  }

  onPostComment = (author, body) => {
    this.props.postComment(this.props.match.params.post_id, author, body);
  };

  onDeletePost = () => {
    this.props.deletePost(this.props.match.params.post_id);
  };

  onVote = vote => {
    this.props.postVote(this.props.match.params.post_id, vote);
    this.refreshPost();
  };

  onCommentVote = (commentId, vote) => {
    this.props.postCommentVote(commentId, vote);
    this.refreshComments();
  };

  onDeleteComment = (commentId) => {
    this.props.deleteComment(commentId);
    this.refreshComments();
  }

  onEditComment = (commentId, body) => {
    this.props.editComment(commentId, new Date(), body);
    this.refreshComments();
  }

  render() {
    const { post, comments, history } = this.props;
    return (
      <PostDetails
        post={post}
        comments={comments}
        onGoBack={() => history.goBack()}
        onPostComment={this.onPostComment}
        onDelete={this.onDeletePost}
        onVote={this.onVote}
        onCommentVote={this.onCommentVote}
        onDeleteComment={this.onDeleteComment}
        onEditComment={this.onEditComment}
      />
    );
  }
}

PostDetailsContainer.defaultProps = {
  post: {},
  comments: [],
};

const mapStateToProps = ({ postDetails, comments }, ownProps) => {
  return {
    post: postDetails.post,
    comments: comments.data,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPostDetails: id => { dispatch(fetchPostById(id)); },
    getComments: id => { dispatch(fetchCommentsForPost(id)); },
    postComment: (parentId, author, body) => {
      dispatch(postComment(parentId, author, body));
    },
    deletePost: id => { dispatch(deletePost(id)); },
    postVote: (id, vote) => { dispatch(postPostVote(id, vote)) },
    postCommentVote: (id, vote) => { dispatch(postCommentVote(id, vote)); },
    editComment: (id, timestamp, body) => {
      dispatch(editComment(id, timestamp, body));
    },
    deleteComment: commentId => { dispatch(deleteComment(commentId)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsContainer);
