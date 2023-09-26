import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { StyledButton } from "../../../utils/styledComponents";
import UploadPreviewImage from "../upload-preview-image/upload-preview-image.component";

const noImageAvailableUrl =["https://res.cloudinary.com/recipeb00k/image/upload/v1670364997/Yelp%20Camp/No_Image_Available_dcvsug.jpg"];

const ImageForm = ({ handleImageChange, handleImageDelete, recipe }) => {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    handleImageChange(e);  
  
    const newPreviewURLs = files.map(file => {
      const fileType = file.type;
      if (fileType !== "image/jpeg" && fileType !== "image/png") {
        alert("Only JPEG or PNG images are allowed.");
        return null;
      }
      return URL.createObjectURL(file);
    }).filter(Boolean);  // Removes nulls
  
    setPreviews(prevPreviews => [...prevPreviews, ...newPreviewURLs]); 
  };

  const handlePreviewDelete = (idx) => {
    const newPreviews = [...previews];
    newPreviews.splice(idx, 1);
    setPreviews(newPreviews);
  };

  

  return (
    <Box my={2}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Recipe Image
      </Typography>
      <Box my={2}>
        {(recipe?.imageUrls?.length || previews.length) ? (
          <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
            {recipe?.imageUrls?.map((url, idx) => (
              <UploadPreviewImage key={idx} imageUrl={url} handleImageDelete={() => handleImageDelete(url)} />

            ))}
            {previews.map((previewUrl, idx) => (
              <UploadPreviewImage key={idx} imageUrl={previewUrl} handleImageDelete={() => handlePreviewDelete(idx)} />
            ))}
          </Box>
        ) : null}
      </Box>

      <label htmlFor="contained-button-file">
        <input
          accept="image/jpeg, image/png"
          id="contained-button-file"
          multiple
          type="file"
          name="imageUrl"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <StyledButton scomponent="span"  sx={{width:'20%' }}>
          Upload Image
        </StyledButton>
      </label>
    </Box>
  );
};

export default ImageForm;
