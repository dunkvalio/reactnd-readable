import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import Content from '../../components/Content';
import List from '../../components/List';
import Post from '../../components/Post';

const CategoryView = ({ category, posts, onGoBack }) => (
  <div>
    <Header>
      <BackButton onClick={onGoBack} />
      <Title>{category}</Title>
      <div />
    </Header>
    <Content>
      <List className="posts-list" data={posts} getKey={item => item.id}>
        {(item, index) => <Post pos={++index} item={item} />}
      </List>
    </Content>
  </div>
);

CategoryView.propTypes = {
  category: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
}

export default CategoryView;
