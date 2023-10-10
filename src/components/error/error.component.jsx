// ErrorComponent.js
import React from 'react';

const ErrorComponent = ({ error }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>{error.stack}</p>
    </div>
  );
};

export default ErrorComponent;
