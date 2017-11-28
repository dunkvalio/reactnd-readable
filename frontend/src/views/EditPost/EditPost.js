import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import CheckIcon from 'react-icons/lib/fa/check';

import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import Content from '../../components/Content';

class EditPost extends Component {
  state = {
    savable: false,
  };

  onClickSave = () => {
    const author = this.authorInput.value;
    const title = this.titleInput.value;
    const body = this.bodyInput.value;
    const category = this.categorySelect.value;

    this.props.onSave(author, title, body, category);
    this.props.onGoBack();
  };

  canSave = () => {
    return this.authorInput.value && this.titleInput.value
      && this.bodyInput.value && this.categorySelect.value;
  };

  onChangeListener = () => {
    if (this.canSave()) {
      this.setState({ savable: true });
    }
  };

  render() {
    const { post, categories, onGoBack } = this.props;
    const { savable } = this.state;

    const isEdit = !!post;
    const title = post ? post.title : 'Create Post';
    const saveButtonColor = savable ? '#01579b' : '#fefefe';
    const saveAction = savable ? this.onClickSave : () => {};

    return <div>
        <Header>
          <BackButton onClick={onGoBack} />
          <Title>{title}</Title>
          <CheckIcon size={30} color={saveButtonColor} onClick={saveAction} />
        </Header>
        <Content>
          <div className='form padded'>
            <div className='form-input-container'>
              <input
                type='text'
                placeholder='Enter your name'
                className='form-input'
                ref={input => {this.authorInput = input}}
                onChange={throttle(this.onChangeListener, 1000)}
                disabled={isEdit}
              />
            </div>
            {categories &&
              <select
                className='form-select'
                defaultValue={categories[0].name}
                onChange={this.onChangeListener}
                ref={select => {this.categorySelect = select}}
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
                placeholder='Enter title'
                className='form-input'
                ref={input => {this.titleInput = input}}
                onChange={throttle(this.onChangeListener, 1000)}
              />
            </div>
            <div className='form-input-container'>
              <input
                className='form-input input-area'
                type='textarea'
                placeholder='Post your comment here...'
                ref={input => {this.bodyInput = input;}}
                onChange={throttle(this.onChangeListener, 1000)}
              />
            </div>
          </div>
        </Content>
      </div>;
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

export default EditPost;
