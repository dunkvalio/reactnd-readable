import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Content from '../../components/Content';

const EditPost = ({ post }) => (
  <div>
    <Header>
      <Title>{post.title}</Title>
    </Header>
    <Content>Edit/Create Post View</Content>
  </div>
);

EditPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
  }),
};

EditPost.defaultProps = {
  post: {},
};

export default EditPost;
