import React, { Component } from 'react';
import { connect } from "react-redux";
import * as postActions from '../../store/actions/posts';
import * as commentActions from '../../store/actions/comments';

import PostDetails from './PostDetails';

class PostDetailsContainer extends Component {
  componentDidMount() {
    this.refreshPost();
    this.refreshComments();
  }

  refreshPost = () => {
    this.props.fetchPostById(this.props.match.params.post_id);
  };

  refreshComments = () => {
    this.props.fetchComments(this.props.match.params.post_id);
  }

  onPostComment = (author, body) => {
    this.props.postComment(this.props.match.params.post_id, author, body);
  };

  onDeletePost = () => {
    this.props.deletePost(this.props.match.params.post_id);
  };

  onVote = vote => {
    this.props.postPostVote(this.props.match.params.post_id, vote);
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
    const { postDetails, comments, history } = this.props;

    return (
      <PostDetails
        post={postDetails}
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
  postDetails: {},
  comments: [],
};

const mapStateToProps = ({ postDetails, comments }) => {
  return { postDetails, comments };
}

export default connect(
  mapStateToProps,
  { ...postActions, ...commentActions },
)(PostDetailsContainer);
