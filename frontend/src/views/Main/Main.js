import React from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../../components/CategoryList';
import Content from '../../components/Content';
import List from '../../components/List';
import Post from '../../components/Post';
import FAB from '../../components/FAB';

const Main = ({ categories, posts }) => (
  <div>
    <CategoryList data={categories} />
    <Content>
      <List
        className='posts-list'
        data={posts}
        getKey={item => item.id}
        render={(item, index) => (
          <Post
            pos={++index}
            item={item}
          />
        )}
      />
      <FAB to='/posts/edit' />
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
