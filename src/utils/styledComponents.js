import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

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
