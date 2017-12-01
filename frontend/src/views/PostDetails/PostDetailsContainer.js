import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  fetchPostById,
  fetchCommentsForPost,
  postComment,
  deletePost,
} from "../../store/actions";
import PostDetails from './PostDetails';

class PostDetailsContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.post_id;
    this.props.getPostDetails(id);
    this.props.getComments(id);
  }

  onPostComment = (author, body) => {
    this.props.postComment(this.props.match.params.post_id, author, body);
  };

  onDeletePost = (postId) => {
    this.props.deletePost(postId);
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
    deletePost: id => { dispatch(deletePost(id)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsContainer);
