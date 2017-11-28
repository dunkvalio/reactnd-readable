import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  createPost, updatePost, fetchCategories
} from '../../store/actions';
import EditPost from './EditPost';

class EditPostContainer extends Component {

  onSave = (author, title, body, category) => {
    const { post, createPost, updatePost } = this.props;

    if(post) {
      updatePost(post.id, title, body);
    } else {
      createPost(author, title, body, category);
    }
  }

  onComponentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { history, post, categories } = this.props;
    return (
      <EditPost
        post={post}
        categories={categories}
        onGoBack={() => history.goBack()}
        onSave={this.onSave}
      />
    );
  }
}

const mapStateToProps = ({ categories, posts }, ownProps) => {
  return {
    post: posts.create,
    categories: categories.all,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPost: (author, title, body, category) => {
      dispatch(createPost(author, title, body, category));
    },
    updatePost: (id, title, body) => {
      dispatch(updatePost(id, title, body));
    },
    getCategories: () => {
      dispatch(fetchCategories());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer);
