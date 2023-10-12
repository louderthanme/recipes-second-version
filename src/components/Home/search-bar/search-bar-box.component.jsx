import React, { useState, useEffect,  } from 'react';
import { Typography, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledSearchBar } from '../../../utils/styledComponents';

const SearchBarBox = ({ handleChange }) => {

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = ['Find your next meal!', 'Tacos fusion', 'Easy pasta'];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box px={4} py={1}>
      <StyledSearchBar
        variant="filled"
        fullWidth
        placeholder={placeholders[placeholderIndex]}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBarBox;
