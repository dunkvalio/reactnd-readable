import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as postActions from '../../store/actions/posts';
import * as categoryActions from '../../store/actions/categories';

import EditPost from './EditPost';

class EditPostContainer extends Component {

  getPost = () => {
    return this.props.location.state
      ? this.props.location.state.post
      : undefined;
  }

  onSave = (author, title, body, category) => {
    const { createPost, updatePost } = this.props;
    const post = this.getPost();

    if(post) {
      updatePost(post.id, title, body);
    } else {
      createPost(author, title, body, category);
    }
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { history, categories } = this.props;

    return (
      <EditPost
        post={this.getPost()}
        categories={categories}
        onGoBack={() => history.goBack()}
        onSave={this.onSave}
      />
    );
  }
}

const mapStateToProps = ({ categories }, ownProps) => {
  return { categories };
};

export default connect(
  mapStateToProps,
  { ...postActions, ...categoryActions },
)(EditPostContainer);
