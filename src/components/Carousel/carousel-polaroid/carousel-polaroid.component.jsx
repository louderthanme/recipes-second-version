import { Box } from "@mui/material";

const CarouselPolaroid = ({ image, title, onClick }) => (
    <Box 
      sx={{ 
        position: 'relative',
        padding: '10px', 
        borderRadius: '10px',
        backgroundColor: 'white', 
        img: {
          maxWidth: '100%',
          maxheight: 'auto'
        }
      }}
      onClick={onClick}
    >
      <img src={image} alt={title} style={{display: 'block'}} />
      <Box textAlign="center" mt={1}>
        <b>{title}</b>
      </Box>
    </Box>
  );
  

export default CarouselPolaroid;
