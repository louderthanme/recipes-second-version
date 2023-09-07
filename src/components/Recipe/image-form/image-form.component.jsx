import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import UploadPreviewImage from "../upload-preview-image/upload-preview-image.component";

const noImageAvailableUrl = "https://res.cloudinary.com/recipeb00k/image/upload/v1670364997/Yelp%20Camp/No_Image_Available_dcvsug.jpg";

const ImageForm = ({ handleImageChange, handleImageDelete, recipe }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    handleImageChange(e);
    const file = e.target.files[0];
    const fileType = file.type;

    // Check for acceptable file types
    if (fileType !== "image/jpeg" && fileType !== "image/png") {
      alert("Only JPEG or PNG images are allowed.");
      return;
    }

    handleImageChange(e)
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }

  return (
    <Box my={2}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Recipe Image
      </Typography>
      <Box my={2}>
        {(recipe && recipe.imageUrl) || preview ? (
          <Box style={{ display: 'block' }}>
            <UploadPreviewImage
              imageUrl={recipe?.imageUrl || preview || noImageAvailableUrl}
              alt={recipe?.title || "Preview"}
              handleImageDelete={handleImageDelete || (() => setPreview(null))}
            />
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
        <Button variant="contained" component="span">
          Upload Image
        </Button>
      </label>
    </Box>
  );
};

export default ImageForm;
