import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import EditIcon from 'react-icons/lib/md/edit';
import DeleteIcon from 'react-icons/lib/md/delete';
import CommentIcon from 'react-icons/lib/md/comment';
import AddIcon from 'react-icons/lib/md/add';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';
import DownvoteIcon from 'react-icons/lib/md/thumb-down';

import { buttonPrimary } from '../../utils/colors';
import { presentVoteScore } from '../../utils/text';

import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import Content from '../../components/Content';
import Title from '../../components/Title';
import List from '../../components/List';
import Comment from '../../components/Comment';
import Group from '../../components/Group';
import ConfirmModal from '../../components/ConfirmModal';

const PostBody = (props) => {
  const { post, onAddComment, onVote } = props;
  const { id, text, author, timestamp, voteScore } = post;

  return (
    <div className='post-details-container'>
      <div className='post-body'>
        <h2 className='post-body-text'>{text}</h2>
      </div>
      <div className='post-details group'>
        <h6 className='post-details-text no-margin'>
          {moment(new Date(timestamp)).fromNow()}
          <span className='primary-color'> by {author}</span>
        </h6>
        <div className='post-score group'>
          <UpvoteIcon
            size={20}
            color={buttonPrimary}
            className='icon-small'
            onClick={() => onVote(1)}
          />
          <h4 className='primary-color'>
            {presentVoteScore(voteScore)}
          </h4>
          <DownvoteIcon
            size={20}
            color={buttonPrimary}
            className='icon-small'
            onClick={() => onVote(-1)}
          />
        </div>
        <div className='post-details-add-comment icon-small' onClick={onAddComment}>
          <AddIcon size={15} color={buttonPrimary} />
          <CommentIcon size={20} color={buttonPrimary} />
        </div>
      </div>
    </div>
  )
};

PostBody.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number,
  onAddComment: PropTypes.func,
};

PostBody.defaultProps = {
  text: null,
  author: null,
  timestamp: 0,
  voteScore: '0 points',
  onAddComment: null,
};

class PostDetails extends Component {

  state = {
    showCommentForm: false,
    showDeleteModal: false,
  }

  toggleCommentForm = () => {
    this.setState(state => ({
      showCommentForm: !state.showCommentForm,
    }));
  }

  toggleConfirmDeleteModal = () => {
    this.setState(state => ({
      showDeleteModal: !state.showDeleteModal
    }));
  }

  postComment = () => {
    this.props.onPostComment(this.authorInput.value, this.commentInput.value);
    this.toggleCommentForm();
    this.authorInput.value = null;
    this.commentInput.value = null;
  }

  onConfirmDelete = () => {
    this.props.onDelete();
    this.toggleConfirmDeleteModal();
    this.props.onGoBack();
  }

  render() {
    const {
      comments,
      post,
      onGoBack,
      onCommentVote,
      onDelete,
      onVote,
      onDeleteComment,
      onEditComment,
    } = this.props;
    const { showCommentForm, showDeleteModal } = this.state;

    return (
      <div>
        <Header>
          <BackButton onClick={onGoBack} />
          <Title small>{post.title}</Title>
          <Group>
            <DeleteIcon
              className='icon'
              size={30}
              color={buttonPrimary}
              onClick={this.toggleConfirmDeleteModal}
            />
            <Link to={{ pathname: '/posts/edit', state: { post } }}>
              <EditIcon
                size={30}
                color={buttonPrimary}
              />
            </Link>
          </Group>
        </Header>
        <Content>
          <PostBody
            post={post}
            onAddComment={this.toggleCommentForm}
            onVote={onVote}
          />
          {showCommentForm && (
            <div className='form card-container padded'>
              <div className='form-input-container'>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='form-input'
                  ref={input => this.authorInput = input}
                />
              </div>
              <div className='form-input-container'>
                <textarea
                  cols='80'
                  rows='1'
                  wrap='soft'
                  placeholder='Post your comment here...'
                  className='form-input input-area'
                  ref={input => this.commentInput = input}
                />
              </div>
              <div className='form-footer'>
                <button onClick={this.postComment} className='form-button-primary'>
                  Post Comment
                </button>
              </div>
            </div>
          )}
          <List className='list' data={comments} getKey={item => item.id}>
            {comment => (
              <Comment
                data={comment}
                onVote={onCommentVote}
                onDelete={onDeleteComment}
                onEdit={onEditComment}
              />
            )}
          </List>
        </Content>
        {showDeleteModal && (
          <ConfirmModal
            isOpen={showDeleteModal}
            onRequestClose={this.toggleConfirmDeleteModal}
            message='You are about to delete this Post.'
            onConfirm={this.onConfirmDelete}
          />
        )}
      </div>
    );
  }
}

PostDetails.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      parentId: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
      voteScore: PropTypes.number.isRequired,
    }),
  ),
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
  }),
  onGoBack: PropTypes.func.isRequired,
  onPostComment: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired,
  onCommentVote: PropTypes.func.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
  onEditComment: PropTypes.func.isRequired,
};

PostDetails.defatultProps = {
  comments: [],
  commentInProgress: {},
  post: {},
  onGoBack: () => {},
  onPostComment: () => {},
  onDelete: () => {},
  onVote: () => {},
  onCommentVote: () => {},
  onDeleteComment: () => {},
  onEditComment: () => {},
};

export default PostDetails;
