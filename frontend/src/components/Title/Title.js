import React from 'react';
import './Title.css';

const Title = ({ small, ...props}) => (
  <div className='title-container'>
    {small
      ? <h4>{props.children}</h4>
      : <h2>{props.children}</h2>
    }
  </div>
);

export default Title;
