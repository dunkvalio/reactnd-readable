import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data, getKey, className, children }) => (
  <ul className={className}>
    {data.map(item => (
      <li key={getKey(item)}>
        {children(item, data.indexOf(item))}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  data: PropTypes.array.isRequired,
  getKey: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  className: PropTypes.string,
}

List.defaultProps = {
  data: [],
  getKey: () => {},
  render: () => {},
  className: null,
}

export default List;
