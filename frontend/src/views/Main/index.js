import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../../store/actions/posts';
import * as categoryActions from '../../store/actions/categories';

import Main from './Main';

class MainContainer extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  onSort = sortBy => {
    this.props.sortPosts(sortBy);
  };

  onVote = (postId, vote) => {
    this.props.postPostVote(postId, vote);
    this.props.fetchPosts();
  };

  onDelete = (postId) => {
    this.props.deletePost(postId);
    this.props.fetchPosts();
  };

  render() {
    const { categories, posts, sortBy, sortOptions } = this.props;
    return (
      <Main
        categories={categories}
        posts={posts}
        sortBy={sortBy}
        sortOptions={sortOptions}
        onSort={this.onSort}
        onVote={this.onVote}
        onDelete={this.onDelete}
      />
    );
  }
}

const mapStateToProps = ({ categories, posts }) => {
  return {
    categories,
    posts: posts.posts,
    sortBy: posts.sortBy,
    sortOptions: posts.sortOptions,
  };
};

export default connect(
  mapStateToProps,
  { ...postActions, ...categoryActions }
)(MainContainer);
