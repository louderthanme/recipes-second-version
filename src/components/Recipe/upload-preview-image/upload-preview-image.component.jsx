import {Box, IconButton} from "@mui/material";
import { red, common} from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';

const UploadPreviewImage = ({ imageUrl, alt, handleImageDelete }) => (
  <Box sx={{ position: 'relative', display: 'inline-block' }} m={1}>
    <img 
      src={imageUrl} 
      alt={alt}
      style={{ maxWidth: '100%', height: '100px', borderRadius: '.5em', border: '.5em solid white' }} 
    />  
        <IconButton
          aria-label="delete-recipe"
          size="small"
          onClick={()=>handleImageDelete(imageUrl)}
          sx={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            width: '20px',
            height: '20px',
            backgroundColor: red[500],
            '&:hover': {
              backgroundColor: red[700],
            },
          }}
        >
          <CloseIcon sx={{ color: common.white, fontSize:'22px' }}  />
        </IconButton>
  </Box>
);

export default UploadPreviewImage;
