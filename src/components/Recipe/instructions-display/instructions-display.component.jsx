import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { updateBoxShadow } from '../../../utils/utils.js';


const InstructionsDisplay = ({ instructions }) => {
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

    
  }, [instructions]);

  return (
    <Box>
      <Typography variant="h6" align='center'>Instructions</Typography>
      <Box
        ref={containerRef}
        sx={{
          maxHeight: '300px',
          overflow: 'auto',
        }}
      >
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction.step}</li>
          ))}
        </ol>
      </Box>
    </Box>
  );
};

export default InstructionsDisplay;
