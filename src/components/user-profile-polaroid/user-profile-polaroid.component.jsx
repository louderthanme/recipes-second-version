import { Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { red, common } from '@mui/material/colors';

const UserProfilePolaroid = ({ image, title, onClick, onDelete }) => (
  <Box 
    sx={{ 
      position: 'relative',
      padding: '10px', 
      borderRadius: '10px',
      backgroundColor: 'white', 
      img: {
        maxWidth: '100%',
        height: 'auto'
      }
    }}
    onClick={onClick}
  >
    <img src={image} alt={title} style={{display: 'block'}} />
    <Box textAlign="center" mt={1}>
      <b>{title}</b>
    </Box>
    <IconButton 
      aria-label="delete-recipe" 
      onClick={onDelete}
      size="small"  // makes the IconButton smaller
      sx={{
        position: 'absolute', 
        top: '-8px',
        right: '-8px',
        width: '24px', // Adjust to your preference
        height: '24px', // Adjust to your preference
        backgroundColor: red[500],
        '&:hover': {
          backgroundColor: red[700], // makes the background slightly darker red on hover
        },
      }}
    >
      <CloseIcon sx={{ color: common.white }} />
    </IconButton>
  </Box>
);


export default UserProfilePolaroid;