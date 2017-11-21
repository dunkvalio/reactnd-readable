import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCategories, fetchPosts } from "../../store/actions";
import Main from './Main';

class MainContainer extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  render() {
    return <Main {...this.props}/>;
  }
}

const mapStateToProps = ({ categories, posts }) => {
  return {
    categories: categories.all,
    posts: posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
