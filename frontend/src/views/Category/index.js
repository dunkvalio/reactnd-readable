import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../../store/actions/posts';

import Category from './Category';

class CategoryContainer extends Component {

  componentDidMount() {
    this.refreshPosts();
  }

  refreshPosts = () => {
    this.props.fetchPosts(this.props.match.params.category);
  }

  onSort = sortBy => {
    this.props.sortPosts(sortBy);
  };

  onVote = (postId, vote) => {
    this.props.postPostVote(postId, vote);
    this.refreshPosts();
  };

  onDelete = (postId) => {
    this.props.deletePost(postId);
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
        onDelete={this.onDelete}
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

export default connect(mapStateToProps, postActions)(CategoryContainer);
