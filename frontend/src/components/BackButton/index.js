import React from 'react';
import ArrowLeftIcon from 'react-icons/lib/fa/arrow-left';

const BackButton = ({ onClick }) => (
  <div onClick={onClick}>
    <ArrowLeftIcon size={30} color="#01579b" />
  </div>
);

export default BackButton;
