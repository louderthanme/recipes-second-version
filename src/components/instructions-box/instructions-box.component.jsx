import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const InstructionsBox = ({ instructions }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const hasOverflow = container.scrollHeight > container.clientHeight;
      container.style.boxShadow = hasOverflow ? 'inset 0px -10px 10px -10px rgba(0, 0, 0, 0.5)' : 'none';
    }
  }, []);

  return (
    <Box>
      <Typography variant="subtitle1" align='center' sx={{fontWeight:'bold'}}>Instructions</Typography>
      <Box
        ref={containerRef}
        sx={{
          maxHeight: '300px',
          overflow: 'auto',
        }}
      >
        <ol>
          {instructions.map((instruction) => (
            <li key={instruction.id}>{instruction.step}</li>
          ))}
        </ol>
      </Box>
    </Box>
  );
};

export default InstructionsBox;
