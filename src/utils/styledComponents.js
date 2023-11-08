import { styled } from "@mui/material/styles";
import { TextField, Divider, Select, Toolbar, Button, Tab, Tabs, FormControlLabel, Chip } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    background: "rgb(255, 255, 255)",
    transition: "box-shadow 0.3s", // Add a transition for smooth hover effect
    "&:hover": {
      boxShadow: `0 0 2px ${'theme.palette.secondary.main'}`, // Apply the glow effect on hover
      backgroundColor: 'rgb(255, 255, 255)' // maintain the white background color on hover
    },
    '&.Mui-focused': {
      backgroundColor: 'rgb(255, 255, 255)', // maintain the white background color on focus
    },
  },
  "& .MuiFilledInput-underline:before": {
    // Default underline color
    borderBottom: "1px solid #a77da6",
  },

  "& .MuiFilledInput-underline:after": {
    // Underline color when input is focused
    borderBottom: "2px solid #a77da6",
  },

  "&:hover .MuiFilledInput-underline:before": { 
    // Underline color when hovered (before focus)
    borderBottom: "1px solid #a77da6 !important",
  },

  "&:hover .MuiFilledInput-underline:after": { 
    // Underline color when hovered (after focus)
    borderBottom: "2px solid #523d52 !important",
  },
  "& .MuiInputLabel-filled": {
    color: 'black', // Normal state color
  },

  "& .MuiInputLabel-filled.Mui-focused": {
    color: theme.palette.secondary.main, // Color when the input is focused
  },
  // manage the margin here
  margin: theme.spacing(1, 0),  // this applies 1x the theme spacing unit on top and bottom, and 0 on left and right
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  "& .MuiSelect-select:hover": {
    boxShadow: `0 0 8px ${theme.palette.secondary}`,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  '& .MuiSelect-select.Mui-focused': {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  margin: theme.spacing(1, 0),
}));


export const StyledDivider = styled(Divider)({
  backgroundColor: '#40000', 
  height: '2px', 
  margin: '20px 0',
});

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '48px !important',
}));

export const DotMatrixBackground = styled('div')(({ theme }) => ({
  width: '100vw',
  minHeight: '100vh',  
  backgroundColor: 'white',
  backgroundImage: 'radial-gradient(#e8e3f1 1px, transparent 2px)',
  backgroundSize: '30px 30px',
}));

export const StyledSearchBar = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    fontFamily: "'Caveat', cursive",
    background: "rgb(255, 255, 255)",
    transition: "box-shadow 0.3s",
    "&:hover": {
      backgroundColor: "rgb(255, 255, 255)",
    },
    '&.Mui-focused': {
      backgroundColor: "rgb(255, 255, 255)",
    },
  },
  '& .MuiFilledInput-input': {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  margin: theme.spacing(1, 0),
  paddingTop: '20px', // Add some top padding to create space for InputAdornment
  '& .MuiInputAdornment-root': {
    height: 'auto !important',
    maxHeight: 'none !important',
    alignItems: 'center !important',
  },
  '& .MuiSvgIcon-root': {
    verticalAlign: 'middle !important',
  },  
  "& .MuiFilledInput-underline:before": {
    // Default underline color
    borderBottom: "1px solid #fcbcfb",
  },

  "& .MuiFilledInput-underline:after": {
    // Underline color when input is focused
    borderBottom: "2px solid #fcbcfb",
  },

  "&:hover .MuiFilledInput-underline:before": { 
    // Underline color when hovered (before focus)
    borderBottom: "1px solid #a77da6 !important",
  },

  "&:hover .MuiFilledInput-underline:after": { 
    // Underline color when hovered (after focus)
    borderBottom: "2px solid #523d52 !important",
  },
}));


export const StyledButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-root": {
    backgroundColor: "#a77da620", // 50% transparency using HEX
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "#523d5240", // 50% transparency on hover using HEX
    },
  },
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  // Styling the indicator (the active tab line)
  "& .MuiTabs-indicator": {
    backgroundColor: "#a77da6",
    height: "2px",
  },

  // Override the color of the text to be black for both unselected and selected tabs
  "& .MuiTab-root": {
    color: "black",
    fontFamily:'Caveat',
    fontWeight:'bold',
    fontSize:'20px', 
    "&.Mui-selected": {
      color: "black",
    },
  },

  // Override the ripple effect color when the tab is clicked
  "& .MuiTouchRipple-root": {
    color: "#ebd7fd", // replace #desiredColor with the color you want
  }
}));


export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiTypography-root": {
    fontFamily:'Caveat',
    fontWeight:'bold',
    fontSize:'20px', 
  },
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  fontFamily:'Caveat',
  fontWeight:'semibold',
}));