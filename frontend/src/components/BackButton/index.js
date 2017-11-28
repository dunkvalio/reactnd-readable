import React from 'react';
import ArrowLeftIcon from 'react-icons/lib/fa/arrow-left';

import { buttonPrimary } from '../../utils/colors';

const BackButton = ({ onClick }) => (
  <div onClick={onClick}>
    <ArrowLeftIcon size={25} color={buttonPrimary} />
  </div>
);

export default BackButton;
