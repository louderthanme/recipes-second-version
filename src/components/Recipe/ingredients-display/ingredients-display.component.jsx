import React, { useRef, forwardRef } from 'react';
import { Box, Typography } from '@mui/material';

const IngredientsDisplay = React.forwardRef(({ ingredients, height }, ref) => {


  return (
    <Box sx={{backgroundColor:'#bcfcbd', color:'#430342', borderRadius:'8px', border:'.5em solid white'}}>
      <Typography variant="h6" align='center' pt={2} pb={2}> <b>Ingredients</b></Typography>
      <Box
        ref={ref}
        sx={{
          height: `${height}px`,
          maxHeight:'400px',
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
});

export default IngredientsDisplay;
