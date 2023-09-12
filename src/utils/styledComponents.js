import { styled } from "@mui/material/styles";
import { TextField, Divider, Select, Toolbar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    background: "rgb(255, 255, 255)",
    transition: "box-shadow 0.3s", // Add a transition for smooth hover effect
    "&:hover": {
      boxShadow: `0 0 8px ${theme.palette.primary.main}`, // Apply the glow effect on hover
      backgroundColor: 'rgb(255, 255, 255)' // maintain the white background color on hover
    },
    '&.Mui-focused': {
      backgroundColor: 'rgb(255, 255, 255)', // maintain the white background color on focus
    },
  },
  // manage the margin here
  margin: theme.spacing(1, 0),  // this applies 1x the theme spacing unit on top and bottom, and 0 on left and right
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  "& .MuiSelect-select:hover": {
    boxShadow: `0 0 8px ${theme.palette.primary.main}`,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  '& .MuiSelect-select.Mui-focused': {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  margin: theme.spacing(1, 0),
}));


export const StyledDivider = styled(Divider)({
  backgroundColor: '#40000', // change this color to fit your design
  height: '2px', // change this to control the thickness
  margin: '10px 0', // add some margin to make the divider more noticeable
});

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '48px !important', // change this to adjust the height of the toolbar
}));

export const DotMatrixBackground = styled('div')(({ theme }) => ({
  width: '100vw',
  minHeight: '100vh',  // Set minimum height to 100vh
  backgroundColor: 'white',
  backgroundImage: 'radial-gradient(#e8e3f1 1px, transparent 2px)',
  backgroundSize: '30px 30px',
}));

export const StyledSearchBar = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    background: "rgb(255, 255, 255)",
    transition: "box-shadow 0.3s",
    "&:hover": {
      boxShadow: `0 0 8px ${theme.palette.primary.main}`,
      backgroundColor: "rgb(255, 255, 255)"
    },
    '&.Mui-focused': {
      backgroundColor: "rgb(255, 255, 255)"
    },
  },
  '& .MuiFilledInput-input': {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  margin: theme.spacing(1, 0),
  '& .MuiInputAdornment-root': {
    height: 'auto !important',
    maxHeight: 'none !important',
    alignItems: 'center !important',
  },
  '& .MuiSvgIcon-root': {
    verticalAlign: 'middle !important',
  } 
}));
