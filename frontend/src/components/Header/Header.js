import React from 'react';

const Header = (props) => {
  const className = (props.children && props.children.length > 1)
    ? 'App-header'
    : 'App-header header-single';
  return (
    <div className={className}>
      {props.children}
    </div>
  )
};

export default Header;
