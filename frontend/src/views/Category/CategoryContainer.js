import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../../store/actions";
import Category from './Category';

class CategoryContainer extends Component {

  componentDidMount() {
    this.props.getPosts(this.props.match.params.name);
  }

  render() {
    return (
      <Category
        category={this.props.match.params.name}
        posts={this.props.posts}
      />
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (category) => dispatch(fetchPosts(category)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);