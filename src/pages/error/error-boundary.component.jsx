// ErrorBoundary.js
import React, { useEffect } from 'react';
import useError from '../../hooks/useError';
import ErrorComponent from '../../components/error/error.component';

const ErrorBoundary = ({ children }) => {
  const error = useError();

  useEffect(() => {
    if (error) {
      console.error(error); // Log the error for debugging purposes
    }
  }, [error]);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return children;
};

export default ErrorBoundary;
