import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Center from '../../components/Header/Center';
import Title from '../../components/Title';;
import Content from '../../components/Content';

const EditPost = ({ post }) => (
  <div>
    <Header>
      <Center>
        <Title>{post.title}</Title>
      </Center>
    </Header>
    <Content>
      Edit/Create Post View
    </Content>
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

export default EditPost;
