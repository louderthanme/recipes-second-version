import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const UploadPreviewImage = ({ imageUrl, alt, handleImageDelete }) => (
  <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1em' }}>
    <img 
      src={imageUrl} 
      alt={alt}
      style={{ maxWidth: '100%', height: '100px', borderRadius: '.5em', border: '.5em solid white' }} 
    />
    <IconButton 
      aria-label="delete-image" 
      onClick={handleImageDelete}
      style={{ position: 'absolute', top: '0', right: '0', backgroundColor: 'white' }}
    >
      <CloseIcon />
    </IconButton>
  </div>
);

export default UploadPreviewImage;
