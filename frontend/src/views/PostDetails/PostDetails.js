import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import EditIcon from 'react-icons/lib/fa/pencil-square';
import './PostDetails.css';

import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import Content from '../../components/Content';
import Title from '../../components/Title';

const PostBody = ({ text, author, timestamp }) => (
  <div className="post-body">
    <div className="post-body-text-container">
      <p className="post-body-text">{text}</p>
    </div>
    <div className="post-details">
      <h6 className="post-details-text">
        {moment(new Date(timestamp)).fromNow()}
        <span className="post-author"> by {author}</span>
      </h6>
    </div>
  </div>
);

PostBody.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

const PostDetails = ({ post, onGoBack }) => (
  <div>
    <Header>
      <BackButton onClick={onGoBack} />
      <Title small>{post.title}</Title>
      <EditIcon size={50} color="#01579b" />
    </Header>
    <Content>
      <PostBody
        text={post.body}
        author={post.author}
        timestamp={post.timestamp}
      />
    </Content>
  </div>
);

PostDetails.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
  }),
};

export default PostDetails;
