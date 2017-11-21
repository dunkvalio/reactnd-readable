import React from 'react';
import PropTypes from 'prop-types';
import Title from "../../components/Title";
import Content from '../../components/Content';
import List from "../../components/List";
import Post from "../../components/Post";

const CategoryView = ({ category, posts }) => (
  <div>
    <Title text={category} />
    <Content>
      <List
        className="posts-list"
        data={posts}
        getKey={item => item.id}
        render={(item, index) => <Post pos={++index} item={item} />}
      />
    </Content>
  </div>
);

CategoryView.propTypes = {
  category: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
}

export default CategoryView;
