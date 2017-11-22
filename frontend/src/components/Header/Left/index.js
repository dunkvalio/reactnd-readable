import React from 'react';
import PropTypes from 'prop-types';

const Left = ({ children }) => (
  <div className="App-header-left">
    {children}
  </div>
);

Left.propTypes = {
  component: PropTypes.element.isRequired,
};

export default Left;
