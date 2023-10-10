// useError.js
import { useState, useEffect } from 'react';

const useError = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleWindowError = (event) => {
      setError(event.error || new Error('An error occurred'));
    };

    window.addEventListener('error', handleWindowError);

    return () => {
      window.removeEventListener('error', handleWindowError);
    };
  }, []);

  return error;
};

export default useError;
