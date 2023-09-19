import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import {useDebounceEffect, updateBoxShadow} from '../../../utils/utils'


const IngredientsDisplay = ({ ingredients }) => {
  const containerRef = useRef(null);

  useDebounceEffect(() => {
    const container = containerRef.current;
    updateBoxShadow(container);
  }, [ingredients]);


  return (
    <Box>
      <Typography variant="h6" align='center' sx={{ fontWeight: 'bold' }}> <b>Ingredients</b></Typography>
      <Box
        ref={containerRef}
        sx={{
          maxHeight: '300px',
          overflow: 'auto',
        }}
      >
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>  {ingredient.quantity}{ingredient.unit} of  {ingredient.name} </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default IngredientsDisplay;
