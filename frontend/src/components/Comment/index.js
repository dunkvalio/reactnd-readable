import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import moment from 'moment';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';
import DownvoteIcon from 'react-icons/lib/md/thumb-down';
import EditIcon from 'react-icons/lib/md/edit';
import DeleteIcon from 'react-icons/lib/md/delete';

import { buttonPrimary } from '../../utils/colors';
import { presentVoteScore } from '../../utils/text';

import Group from '../Group';
import ConfirmModal from '../ConfirmModal';

class Comment extends Component {
  state = {
    showDeleteModal: false,
    showEditModal: false,
    editCommentValue: null,
  }

  toggleDeleteModal = () => {
    this.setState(state => ({
      showDeleteModal: !state.showDeleteModal,
    }));
  }

  toggleEditModal = () => {
    this.setState(state => ({
      showEditModal: !state.showEditModal,
    }));
  }

  onEditModalInputChange = e => {
    this.setState({ editCommentValue: e.target.value });
  }

  saveEditModal = e => {
    const { data, onEdit } = this.props;
    const { editCommentValue = data.body } = this.state;
    onEdit(data.id, editCommentValue);
    this.toggleEditModal();
  }

  render() {
    const { data, onVote, onDelete } = this.props;
    const { editCommentValue, showDeleteModal, showEditModal } = this.state;

    return (
      <div className='comment-container card-container'>
        <Group>
          <Group>
            <h6 className='comment-header-text no-margin'>Comment by {data.author}</h6>
            <h6 className='comment-header-text no-margin'>
              {moment(new Date(data.timestamp)).fromNow()}
            </h6>
          </Group>
          <Group>
            <DeleteIcon
              className='icon-small'
              size={20}
              color={buttonPrimary}
              onClick={this.toggleDeleteModal}
            />
            <EditIcon
              className='icon-small'
              size={20}
              color={buttonPrimary}
              onClick={this.toggleEditModal}
            />
          </Group>
        </Group>
        <div className='comment-body border-container'>
          <p>{data.body}</p>
        </div>
        <Group centered>
          <UpvoteIcon
            size={20}
            color={buttonPrimary}
            className='icon-small'
            onClick={() => onVote(data.id, 1)}
            />
          <h4 className="primary-color vote-item">
            {presentVoteScore(data.voteScore)}
          </h4>
          <DownvoteIcon
            size={20}
            color={buttonPrimary}
            className='icon-small'
            onClick={() => onVote(data.id, -1)}
            />
        </Group>
        {showDeleteModal && (
          <ConfirmModal
            isOpen={showDeleteModal}
            onRequestClose={this.toggleDeleteModal}
            message={`You are about to delete this Comment!`}
            onConfirm={() => onDelete(data.id)}
          />
        )}
        {showEditModal && (
          <Modal
            className="modal option-container"
            overlayClassName="overlay"
            isOpen={showEditModal}
            onRequestClose={this.toggleEditModal}
            contentLabel="Edit Comment"
          >
            <div className='form-input-container'>
              <textarea
                cols='80'
                rows='1'
                wrap='soft'
                placeholder='Post your comment here...'
                value={editCommentValue ? editCommentValue : data.body}
                className='form-input input-area'
                onChange={this.onEditModalInputChange}
                ref={ta => this.editedBody = ta}
              />
            </div>
            <Group>
              <button onClick={this.toggleEditModal} className='form-button-primary'>
                Cancel
              </button>
              <button onClick={this.saveEditModal} className='form-button-primary'>
                Save
              </button>
            </Group>
          </Modal>
        )}
      </div>
    );
  }
}

Comment.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    voteScore: PropTypes.string,
    timestamp: PropTypes.number,
  }).isRequired,
  onVote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Comment;
