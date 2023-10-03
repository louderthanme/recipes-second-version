import React, { useState, useEffect } from 'react';
import { Typography, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledSearchBar } from '../../../utils/styledComponents';

const SearchBarBox = ({ handleChange }) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = ['Find your next meal!', 'Tacos fusion', 'Easy pasta'];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000); // Change the placeholder every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <Box px={4} py={2}>
      <Typography variant="h1" fontWeight="bold" mt={2} mb={1} textAlign={'center'} sx={{ color: '#750303', fontFamily: 'Caveat' }}>
        Nibble Notebook
      </Typography>
      <StyledSearchBar
        variant="filled"
        fullWidth
        placeholder={placeholders[placeholderIndex]}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ display: 'flex', alignItems: 'center' }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBarBox;
