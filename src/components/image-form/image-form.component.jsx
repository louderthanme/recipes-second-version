import { Typography, Box} from "@mui/material";

const ImageForm = ({ handleImageChange, recipe }) => {
    return (
      <Box my={2}>
        <Typography variant="h5" fontWeight="bold">
          Recipe Image
        </Typography>
        <input type="file" name="imageUrl" accept="image/*" onChange={handleImageChange} />
        <Box marginBottom={2}>
          {recipe && recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} style={{ maxHeight: '300px' }} />}
        </Box>
      </Box>
    );
  };
  
  export default ImageForm;
  