import { styled } from "@mui/material/styles";
import { TextField, Divider, Select } from "@mui/material";

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


export const DotMatrixBackground = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: 'white',
  backgroundImage: 'radial-gradient(#e8e3f1 1px, transparent 2px)',
  backgroundSize: '30px 30px',
}));

