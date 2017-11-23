import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from 'react-icons/lib/fa/plus';

import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import Content from '../../components/Content';
import List from '../../components/List';
import Post from '../../components/Post';
import FAB from '../../components/FAB';

const Main = ({ categories, posts }) => (
  <div>
    <Header>
      <CategoryList data={categories} />
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
      <FAB to='/posts/edit'>
        <AddIcon size={20} color='#ffff'/>
      </FAB>
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
