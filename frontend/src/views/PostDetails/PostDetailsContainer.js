import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPostById } from "../../store/actions";
import PostDetails from './PostDetails';

class PostDetailsContainer extends Component {

  componentDidMount() {
    this.props.getPostDetails(this.props.match.params.id);
  }

  render() {
    return (
      <PostDetails post={this.props.post}/>
    );
  }
}

const mapStateToProps = ({ postDetails }, ownProps) => {
  return { post: postDetails.post }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPostDetails: (id) => {
      dispatch(fetchPostById(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsContainer);
