import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const IngredientsDisplay = React.forwardRef(({ ingredients, height, maxHeight }, ref) => {
  return (
    <Box sx={{backgroundColor:'#bcfcbd', color:'#430342', borderRadius:'8px', border:'.5em solid white'}}>
      <Typography variant="h4" align='center' pt={2} pb={2} sx={{ fontFamily:'Caveat', fontWeight:'bold' }}>
        Ingredients
      </Typography>
      <Box
        ref={ref}
        sx={{
          height: `${height}px`,
          maxHeight: maxHeight,
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
          scrollbarWidth: 'thin',
          scrollbarColor: '#888 #eee',
        }}
      >
        <List sx={{fontSize:'20px', paddingY:'0px', marginY:'0px'}}>
          {ingredients.map((ingredient, index) => (
            <ListItem key={index}>
              {ingredient.quantity} {ingredient.unit} of {ingredient.name}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
});

export default IngredientsDisplay;
