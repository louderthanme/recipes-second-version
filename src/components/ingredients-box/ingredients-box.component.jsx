import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { updateBoxShadow } from '../../utils/domUtils'; // Adjust the import path as per your project structure

const IngredientsBox = ({ ingredients }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const updateBoxShadowAndDebounce = () => {
      updateBoxShadow(container);
    };

    updateBoxShadowAndDebounce(); // Call the function initially

    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(updateBoxShadowAndDebounce, 100);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ingredients]);

  return (
    <Box>
      <Typography variant="subtitle1" align='center' sx={{ fontWeight: 'bold' }}>Ingredients</Typography>
      <Box
        ref={containerRef}
        sx={{
          maxHeight: '300px',
          overflow: 'auto',
        }}
      >
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default IngredientsBox;
