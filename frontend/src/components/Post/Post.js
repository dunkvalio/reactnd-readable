import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import moment from 'moment';
import './Post.css';

const postDescription = (post) => {
  let desc = post.voteScore === 1
    ? `${post.voteScore} point`
    : `${post.voteScore} points`;
  desc += ` by ${post.author}`;
  desc += ` ${moment(new Date(post.timestamp)).fromNow()}`;
  desc += ' | ';
  desc += post.commentCount === 1
    ? `${post.commentCount} comment`
    : `${post.commentCount} comments`;
  return desc;
};

const Post = ({ item, pos, onClick }) => (
  <Link to={`/posts/${item.id}`} className='post-card'>
    <h4 className='post-rank'>{pos}. </h4>
    <div className='post-summary'>
      <h4 className='post-title'>{item.title}</h4>
      <h6 className='post-description'>{postDescription(item)}</h6>
    </div>
  </Link>
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
}

export default Post;