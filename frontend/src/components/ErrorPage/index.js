import React from 'react';
import ErrorIcon from 'react-icons/lib/md/error';

import { lightGray } from '../../utils/colors';

const ErrorPage = ({ message }) => (
  <div className="error-page">
    <ErrorIcon size={100} color={lightGray} />
    <h1>404</h1>
    <h1>{message}</h1>
  </div>
);

export default ErrorPage;
