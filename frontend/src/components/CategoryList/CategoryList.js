import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import List from '../List';
import './CategoryList.css';

const Category = ({ item, className }) => (
  <Link to={`/categories/${item.path}/posts`}>
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
    className='category-list'
    data={data}
    getKey={item => item.name}
    render={item => (<Category item={item} className='category-list-item'/>)}
  />
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
