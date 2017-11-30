import React from 'react';
import moment from 'moment';

import Group from '../Group';

const Comment = ({ data }) => (
  <div className='comment-container card-container'>
    <Group>
      <h6 className='comment-header-text no-margin'>Comment by {data.author}</h6>
      <h6 className='comment-header-text no-margin'>
        {moment(new Date(data.timestamp)).fromNow()}
      </h6>
    </Group>
    <div className='comment-body border-container'>
      <p>{data.body}</p>
    </div>
  </div>
);

export default Comment;
