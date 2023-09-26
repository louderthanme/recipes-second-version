import React, { useRef, forwardRef } from 'react';
import { Box, Typography } from '@mui/material';


const InstructionsDisplay = React.forwardRef(({ instructions, maxHeight, height }, ref) => {


  return (
    <Box sx={{backgroundColor:'#c3bcfc',  color:'#430342', borderRadius:'8px', border:'.5em solid white'}} pr={2}>
      <Typography variant="h6" align='center' pt={2} pb={2}>Instructions</Typography>
      <Box
        ref={ref}
        sx={{
          height: `${height}px`,
          maxHeight: maxHeight,
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
});

export default InstructionsDisplay;
