import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CommentsIcon from 'react-icons/lib/md/mode-comment';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';
import DownvoteIcon from 'react-icons/lib/md/thumb-down';

import { secondary } from '../../utils/colors';

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

const Post = ({ item, pos, onVote }) => (
  <div className='post-card card-container padded'>
    <Link to={`/${item.category}/${item.id}`} className='post-card-body flex'>
      <h4 className='post-rank'>{pos}. </h4>
      <div className='post-summary'>
        <h4 className='post-title no-margin'>{item.title}</h4>
        <h6 className='post-description no-margin'>
          {postDescription(item)} <CommentsIcon size={12} color={secondary} />
        </h6>
      </div>
    </Link>
    <div className='post-vote-container'>
      <UpvoteIcon
        size={30}
        color={secondary}
        className='vote-item'
        onClick={() => onVote(item.id, 1)}
      />
      <DownvoteIcon
        size={30}
        color={secondary}
        className='vote-item'
        onClick={() => onVote(item.id, -1)}
      />
    </div>
  </div>
);

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
}

export default Post;
