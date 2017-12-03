import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CommentsIcon from 'react-icons/lib/md/mode-comment';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';
import DownvoteIcon from 'react-icons/lib/md/thumb-down';
import EditIcon from 'react-icons/lib/md/edit';
import DeleteIcon from 'react-icons/lib/md/delete';

import { secondary } from '../../utils/colors';

import ConfirmModal from '../../components/ConfirmModal';

const postDescription = (post) => {
  let desc = post.voteScore === 1
    ? `${post.voteScore} point`
    : `${post.voteScore} points`;
  desc += ` by ${post.author}`;
  desc += ` ${moment(new Date(post.timestamp)).fromNow()}`;
  desc += ' | ';
  desc += post.commentCount;
  return desc;
};

class Post extends Component {
  state = {
    showDeleteModal: false,
  };

  toggleDeleteModal= () => {
    this.setState(state => ({
      showDeleteModal: !state.showDeleteModal,
    }));
  };

  onConfirmDelete = () => {
    this.props.onDelete(this.props.item.id);
    this.toggleDeleteModal();
  };

  render() {
    const { item, pos, onVote } = this.props;
    const { showDeleteModal } = this.state;
    return (
      <div className="post-card card-container padded">
        <Link to={`/${item.category}/${item.id}`} className="post-card-body flex">
          <h4 className="post-rank">{pos}. </h4>
          <div className="post-summary">
            <h4 className="post-title no-margin">{item.title}</h4>
            <h6 className="post-description no-margin">
              {postDescription(item)} <CommentsIcon size={12} color={secondary} />
            </h6>
          </div>
        </Link>
        <div className="post-vote-container">
          <UpvoteIcon
            size={30}
            color={secondary}
            className="icon"
            onClick={() => onVote(item.id, 1)}
            />
          <DownvoteIcon
            size={30}
            color={secondary}
            className="icon"
            onClick={() => onVote(item.id, -1)}
            />
          <Link to={{ pathname: '/posts/edit', state: { post: item } }} className="icon" >
            <EditIcon
              size={30}
              color={secondary}
              />
          </Link>
          <DeleteIcon
            size={30}
            color={secondary}
            className="icon"
            onClick={() => this.toggleDeleteModal()}
            />
        </div>
        {showDeleteModal && (
          <ConfirmModal
            isOpen={showDeleteModal}
            onRequestClose={this.toggleDeleteModal}
            message='You are about to delete this Post.'
            onConfirm={this.onConfirmDelete}
          />
        )}
      </div>
    );
  }
}

Post.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
  }).isRequired,
  pos: PropTypes.number.isRequired,
  onVote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Post;
