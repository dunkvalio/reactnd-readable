import React from 'react';
import PropTypes from 'prop-types';

const Right = ({ children }) => (
  <div className="App-header-right">
    {children}
  </div>
);

Right.propTypes = {
  component: PropTypes.element.isRequired,
};

export default Right;
