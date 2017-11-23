import React from 'react';
import moment from 'moment';
import './Comment.css'

const Comment = ({ data }) => (
  <div className="comment-container card-container">
    <div className="comment-header">
      <h6 className="comment-header-text">Comment by {data.author}</h6>
      <h6 className="comment-header-text">
        {moment(new Date(data.timestamp)).fromNow()}
      </h6>
    </div>
    <div className="comment-body border-container">
      <p>{data.body}</p>
    </div>
  </div>
);

export default Comment;