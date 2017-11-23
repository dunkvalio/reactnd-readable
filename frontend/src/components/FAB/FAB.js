import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FAB.css'

const FloatingActionButton = ({ children, to }) => (
  <Link to={to} className="fab-main">
    {children}
  </Link>
);

FloatingActionButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default FloatingActionButton;
