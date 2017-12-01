import React from 'react';
import PropTypes from 'prop-types';

const Group = ({ centered, children }) => (
  <div className={centered ? 'group flex-centered' : 'group'}>
    {children}
  </div>
);

Group.propTypes = {
  centered: PropTypes.bool,
};

export default Group;
