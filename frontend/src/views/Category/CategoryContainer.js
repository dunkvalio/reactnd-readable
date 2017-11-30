import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  fetchPosts,
  sortPosts,
  postPostVote
} from '../../store/actions';

import Category from './Category';

class CategoryContainer extends Component {

  componentDidMount() {
    this.refreshPosts();
  }

  refreshPosts = () => {
    this.props.getPosts(this.props.match.params.category);
  }

  onSort = sortBy => {
    this.props.sortPosts(sortBy);
  };

  onVote = (postId, vote) => {
    this.props.postVote(postId, vote);
    this.refreshPosts();
  };

  render() {
    const { posts, match, sortBy, sortOptions } = this.props;
    return (
      <Category
        category={match.params.category}
        posts={posts}
        onGoBack={() => this.props.history.goBack()}
        sortOptions={sortOptions}
        sortBy={sortBy}
        onSort={this.onSort}
        onVote={this.onVote}
      />
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
    sortBy: posts.sortBy,
    sortOptions: posts.sortOptions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (category) => dispatch(fetchPosts(category)),
    sortPosts: (sortBy) => dispatch(sortPosts(sortBy)),
    postVote: (postId, vote) => dispatch(postPostVote(postId, vote)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
