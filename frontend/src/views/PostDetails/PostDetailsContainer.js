import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  fetchPostById,
  fetchCommentsForPost,
  postComment,
} from "../../store/actions";
import PostDetails from './PostDetails';

class PostDetailsContainer extends Component {

  onPostComment = (author, body) => {
    this.props.postComment(this.props.match.params.id, author, body);
  }

  componentDidMount() {
    this.props.getPostDetails(this.props.match.params.id);
    this.props.getComments(this.props.match.params.id);
  }

  render() {
    return (
      <PostDetails
        post={this.props.post}
        comments={this.props.comments}
        onGoBack={() => this.props.history.goBack()}
        onPostComment={this.onPostComment}
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
    commentItProgress: comments.inProgress,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPostDetails: id => { dispatch(fetchPostById(id)); },
    getComments: id => { dispatch(fetchCommentsForPost(id)); },
    postComment: (parentId, author, body) => {
      dispatch(postComment(parentId, author, body));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsContainer);
