import React from 'react';
import ArrowLeftIcon from 'react-icons/lib/fa/arrow-left';

const BackButton = ({ onClick }) => (
  <div onClick={onClick}>
    <ArrowLeftIcon size={25} color="#01579b" />
  </div>
);

export default BackButton;
