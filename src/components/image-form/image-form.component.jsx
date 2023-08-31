import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ImageForm = ({ handleImageChange, handleImageDelete, recipe }) => {
  return (
    <Box my={2}>
      <Typography variant="h5" fontWeight="bold">
        Recipe Image
      </Typography>
      <input type="file" name="imageUrl" accept="image/*" onChange={handleImageChange} />
      <Box my={2} position="relative" style={{ display: 'inline-block' }}>
        {recipe && recipe.imageUrl && (
          <>
            <img 
              src={recipe.imageUrl} 
              alt={recipe.title} 
              style={{ maxWidth: '100%', height: '100px', borderRadius: '.5em', border: '.5em solid white' }} 
            />
            <IconButton 
              aria-label="delete-image" 
              onClick={handleImageDelete} 
              style={{ position: 'absolute', top: '0', right: '0', backgroundColor: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ImageForm;
