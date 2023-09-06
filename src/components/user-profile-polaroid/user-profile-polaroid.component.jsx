import { Box } from "@mui/material";

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
      <Box sx={{ position: 'absolute', top: '5px', right: '5px' }}>
        <button onClick={onDelete}>X</button> 
        {/* Replace with your delete icon */}
      </Box>
    </Box>
  );
  
  export default UserProfilePolaroid;