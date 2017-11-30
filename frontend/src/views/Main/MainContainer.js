import React, { Component } from 'react';
import { connect } from "react-redux";

import {
  fetchCategories,
  fetchPosts,
  sortPosts,
  postPostVote,
} from "../../store/actions";

import Main from './Main';

class MainContainer extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  onSort = sortBy => {
    this.props.sortPosts(sortBy);
  }

  onVote = (postId, vote) => {
    this.props.postVote(postId, vote);
    this.props.fetchPosts();
  }

  render() {
    return (
      <Main
        onSort={this.onSort}
        onVote={this.onVote}
        {...this.props}
      />
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
    postVote: (postId, vote) => dispatch(postPostVote(postId, vote)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
