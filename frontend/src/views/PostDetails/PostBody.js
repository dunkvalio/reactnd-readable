import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CommentIcon from 'react-icons/lib/md/comment';
import AddIcon from 'react-icons/lib/md/add';
import UpvoteIcon from 'react-icons/lib/md/thumb-up';
import DownvoteIcon from 'react-icons/lib/md/thumb-down';

import { buttonPrimary } from '../../utils/colors';
import { presentVoteScore } from '../../utils/text';

const PostBody = props => {
  const { post, onAddComment, onVote } = props;
  const { body, author, timestamp, voteScore } = post;

  return (
    <div className="post-details-container">
      <div className="post-body">
        <h2 className="post-body-text">{body}</h2>
      </div>
      <div className="post-details group">
        <h6 className="post-details-text no-margin">
          {moment(new Date(timestamp)).fromNow()}
          <span className="primary-color"> by {author}</span>
        </h6>
        <div className="post-score group">
          <UpvoteIcon
            size={20}
            color={buttonPrimary}
            className="icon-small"
            onClick={() => onVote(1)}
          />
          <h4 className="primary-color">{presentVoteScore(voteScore)}</h4>
          <DownvoteIcon
            size={20}
            color={buttonPrimary}
            className="icon-small"
            onClick={() => onVote(-1)}
          />
        </div>
        <div
          className="post-details-add-comment icon-small"
          onClick={onAddComment}
        >
          <AddIcon size={15} color={buttonPrimary} />
          <CommentIcon size={20} color={buttonPrimary} />
        </div>
      </div>
    </div>
  );
};

PostBody.propTypes = {
  body: PropTypes.string.isRequired,
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

export default PostBody;
