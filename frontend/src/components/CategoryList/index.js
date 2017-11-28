import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import List from '../List';

const Category = ({ item, className }) => (
  <Link to={`/category/${item.path}/posts`}>
    <div className={className}>{item.name}</div>
  </Link>
);

Category.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string,
}

Category.defaultProps = {
  item: {},
  className: null,
}

const CategoryList = ({ data }) => (
  <List
    className="category-list"
    data={data}
    getKey={item => item.name}
  >
    {item => (
      <Category item={item} className="category-list-item" />
    )}
  </List>
);

CategoryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
}

CategoryList.defaultProps = {
  data: [],
}

export default CategoryList;
