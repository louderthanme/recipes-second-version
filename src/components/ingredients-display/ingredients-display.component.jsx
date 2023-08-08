import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import {useDebounceEffect, updateBoxShadow} from '../../utils/utils'


const IngredientsDisplay = ({ ingredients }) => {
  const containerRef = useRef(null);

  useDebounceEffect(() => {
    const container = containerRef.current;
    updateBoxShadow(container);
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
            <li key={index}> <b> {ingredient.quantity}</b> of <b> {ingredient.name} </b>  </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default IngredientsDisplay;
