import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {useDebounceEffect, updateBoxShadow} from '../../../utils/utils'


const IngredientsDisplay = ({ ingredients }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    const updateBoxShadowAndDebounce = () => {
      updateBoxShadow(container);
    }

    updateBoxShadowAndDebounce(); // Call the function initially

    let timeout; // Declare timeout variable, no value assigned so it's undefined.
    const handleResize = () => {
      clearTimeout(timeout); // Clear the timeout in case there's any pending timeout
      timeout = setTimeout(updateBoxShadowAndDebounce, 100);// Assign a new timeout to the timeout variable, thus giving it a value. This will be used to clear the timeout in the next resize event.
    }
    window.addEventListener('resize', handleResize);

    
  }, [ingredients]);

  return (
    <Box sx={{backgroundColor:'#bcfcbd', color:'#430342', borderRadius:'8px', border:'.5em solid white'}}>
      <Typography variant="h6" align='center' pt={2} pb={2}> <b>Ingredients</b></Typography>
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
