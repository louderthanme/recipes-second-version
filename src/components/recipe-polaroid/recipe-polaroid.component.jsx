import { Box } from "@mui/material";

const Polaroid = ({ image, title, onClick }) => (
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
        {title}
      </Box>
    </Box>
  );
  

export default Polaroid;
