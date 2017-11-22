import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Center from '../../components/Header/Center';
import Left from '../../components/Header/Left';
import Right from '../../components/Header/Right';
import Title from '../../components/Title';
import Content from '../../components/Content';
import List from '../../components/List';
import Post from '../../components/Post';

const CategoryView = ({ category, posts }) => (
  <div>
    <Header>
      <Left />
      <Center>
        <Title>{category}</Title>
      </Center>
      <Right />
    </Header>
    <Content>
      <List className="posts-list" data={posts} getKey={item => item.id}>
        {(item, index) =>
          <Post pos={++index} item={item} />
        }
      </List>
    </Content>
  </div>
);

CategoryView.propTypes = {
  category: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
}

export default CategoryView;
