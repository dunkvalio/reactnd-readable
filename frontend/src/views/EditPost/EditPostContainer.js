import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  createPost, updatePost, fetchCategories
} from '../../store/actions';
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
    this.props.getCategories();
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
  return { categories: categories.all };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (author, title, body, category) => (
      dispatch(createPost(author, title, body, category))
    ),
    updatePost: (id, title, body) => dispatch(updatePost(id, title, body)),
    getCategories: () => dispatch(fetchCategories())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer);
