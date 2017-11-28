import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddIcon from 'react-icons/lib/fa/plus';

import { buttonPrimary } from '../../utils/colors';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import Content from '../../components/Content';
import List from '../../components/List';
import Post from '../../components/Post';

const Main = ({ categories, posts }) => (
  <div>
    <Header>
      <div />
      <CategoryList data={categories} />
      <Link to='/posts/edit'>
        <AddIcon size={30} color={buttonPrimary} />
      </Link>
    </Header>
    <Content>
      <List
        className='posts-list'
        data={posts}
        getKey={item => item.id}
      >
        {(item, index) => (
          <Post pos={++index} item={item} />
        )}
      </List>
    </Content>
  </div>
);

Main.propTypes = {
  categories: PropTypes.array,
  posts: PropTypes.array,
};

Main.defaultProps = {
  categories: [],
  posts: [],
};

export default Main;
