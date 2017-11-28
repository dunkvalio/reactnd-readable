import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckIcon from 'react-icons/lib/fa/check';

import {
  buttonPrimary, buttonPrimaryDisabled
} from '../../utils/colors';

import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import Content from '../../components/Content';

class EditPost extends Component {

  constructor(props) {
    super(props);
    const { categories, post } = props;

    this.state = {
      savable: !!post,
      isEdit: !!post,
      heading: post ? post.title : 'Create Post',
      author: post ? post.author : '',
      category: post ? post.category : categories[0].name,
      title: post ? post.title : '',
      body: post ? post.body : '',
    };
  }

  onClickSave = () => {
    const {
      authorInput, categorySelect, titleInput, bodyInput
    } = this;

    this.props.onSave(
      authorInput.value,
      titleInput.value,
      bodyInput.value,
      categorySelect.value
    );
    this.props.onGoBack();
  };

  canSave = () => {
    const {
      authorInput, categorySelect, titleInput, bodyInput
    } = this;

    return authorInput.value
      && categorySelect.value
      && titleInput.value
      && bodyInput.value;
  };

  onChange = (state, formFieldRef) => () => {
      this.setState({
        [state]: this[formFieldRef].value,
        savable: this.canSave(),
      });
  };

  render() {
    const { categories, onGoBack } = this.props;
    const {
      heading, isEdit, author, category, title, body, savable
    } = this.state;

    const saveButtonColor = savable ? buttonPrimary : buttonPrimaryDisabled;
    const saveAction = savable ? this.onClickSave : () => {};

    return (
      <div>
        <Header>
          <BackButton onClick={onGoBack} />
          <Title>{heading}</Title>
          <CheckIcon size={30} color={saveButtonColor} onClick={saveAction} />
        </Header>
        <Content>
          <div className='form padded'>
            <div className='form-input-container'>
              <input
                type='text'
                value={author}
                placeholder='Enter your name'
                className='form-input'
                ref={input => {this.authorInput = input}}
                onChange={this.onChange('author', 'authorInput')}
                disabled={isEdit}
              />
            </div>
            {categories &&
              <select
                className='form-select'
                value={category}
                ref={select => {this.categorySelect = select}}
                onChange={this.onChange('category', 'categorySelect')}
                disabled={isEdit}
              >
                {categories.map(cat => (
                  <option
                    key={cat.name}
                    className='form-select-option'
                    value={cat.name}
                  >
                    {cat.name}
                  </option>
                ))}
              </select>
            }
            <div className='form-input-container'>
              <input
                type='text'
                value={title}
                placeholder='Enter title'
                className='form-input'
                ref={input => {this.titleInput = input}}
                onChange={this.onChange('title', 'titleInput')}
              />
            </div>
            <div className='form-input-container'>
              <input
                className='form-input input-area'
                type='textarea'
                value={body}
                placeholder='Post your comment here...'
                ref={input => {this.bodyInput = input}}
                onChange={this.onChange('body', 'bodyInput')}
              />
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

EditPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    commentCount: PropTypes.number,
    title: PropTypes.string,
    timestamp: PropTypes.number,
    voteScore: PropTypes.number,
    category: PropTypes.string,
  }),
  onGoBack: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

EditPost.defaultProps = {
  post: null,
  categories: [],
};

export default EditPost;
