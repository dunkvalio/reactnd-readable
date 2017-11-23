import React from 'react';
import './Title.css';

const Title = ({ small, ...props}) => (
  <div className='title-container'>
    <h4>{props.children}</h4>
  </div>
);

export default Title;
