import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCategories, fetchPosts, sortPosts } from "../../store/actions";
import Main from './Main';

class MainContainer extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  onSort = (sortBy) => {
    this.props.sortPosts(sortBy);
  }

  render() {
    return (
      <Main onSort={this.onSort} {...this.props} />
    );
  }
}

const mapStateToProps = ({ categories, posts }) => {
  return {
    categories: categories.all,
    posts: posts.posts,
    sortBy: posts.sortBy,
    sortOptions: posts.sortOptions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts()),
    sortPosts: (sortBy) => dispatch(sortPosts(sortBy)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
