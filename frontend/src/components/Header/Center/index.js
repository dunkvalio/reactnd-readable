import React from 'react';
import PropTypes from 'prop-types';

const Center = ({ children }) => (
  <div className="App-header-center">
    {children}
  </div>
);

Center.propTypes = {
  component: PropTypes.element.isRequired
};

export default Center;
