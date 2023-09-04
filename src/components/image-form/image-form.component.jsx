import { useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const noImageAvailableUrl = "https://res.cloudinary.com/recipeb00k/image/upload/v1670364997/Yelp%20Camp/No_Image_Available_dcvsug.jpg";

const ImageForm = ({ handleImageChange, handleImageDelete, recipe }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    handleImageChange(e);

    const file = e.target.files[0];
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }

  return (
    <Box my={2}>
      <Typography variant="h5" fontWeight="bold">
        Recipe Image
      </Typography>
      <label htmlFor="contained-button-file">
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          name="imageUrl"
          onChange={handleFileChange}
          style={{ display: 'none' }} // Hide the default input
        />
        <Button variant="contained" component="span">
          Upload Image
        </Button>
      </label>
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
              onClick={handleImageDelete || (() => setPreview(null))}
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
