import React from 'react';
import ArrowLeftIcon from 'react-icons/lib/md/arrow-back';

import { buttonPrimary } from '../../utils/colors';

const BackButton = ({ onClick }) => (
  <ArrowLeftIcon
    className='pointer'
    size={30}
    color={buttonPrimary}
    onClick={onClick}
  />
);

export default BackButton;
