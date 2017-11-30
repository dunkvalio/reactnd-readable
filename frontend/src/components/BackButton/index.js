import React from 'react';
import ArrowLeftIcon from 'react-icons/lib/md/arrow-back';

import { buttonPrimary } from '../../utils/colors';

const BackButton = ({ onClick }) => (
  <div onClick={onClick}>
    <ArrowLeftIcon size={30} color={buttonPrimary} />
  </div>
);

export default BackButton;
