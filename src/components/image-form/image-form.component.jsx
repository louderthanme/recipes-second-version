import { useState } from "react"; // import useState
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const noImageAvailableUrl = "https://res.cloudinary.com/recipeb00k/image/upload/v1670364997/Yelp%20Camp/No_Image_Available_dcvsug.jpg"; // replace with your actual URL

const ImageForm = ({ handleImageChange, handleImageDelete, recipe }) => {
  const [preview, setPreview] = useState(null); // state to hold the preview URL

  const handleFileChange = (e) => {
    handleImageChange(e); // pass the event up to the parent component

    // display a preview of the image
    const file = e.target.files[0];
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }

  return (
    <Box my={2}>
      <Typography variant="h5" fontWeight="bold">
        Recipe Image
      </Typography>
      <input type="file" name="imageUrl" accept="image/*" onChange={handleFileChange} />
      <Box my={2} position="relative" style={{ display: 'inline-block' }}>
        {(recipe && recipe.imageUrl) || preview ? (
          <>
            <img 
              src={recipe?.imageUrl || preview || noImageAvailableUrl} 
              alt={recipe?.title || "Preview"} 
              style={{ maxWidth: '100%', height: '100px', borderRadius: '.5em', border: '.5em solid white' }} 
            />
            <IconButton 
              aria-label="delete-image" 
              onClick={handleImageDelete || (() => setPreview(null))} // Reset preview to null if handleImageDelete is not provided
              style={{ position: 'absolute', top: '0', right: '0', backgroundColor: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </>
        ) : null}
      </Box>
    </Box>
  );
};

export default ImageForm;
