import { Box } from "@mui/material";
import RecipeImageCarousel from "../../Carousel/recipe-image-carousel/recipe-image-carousel.component";

const ImageBox = ({ images }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="auto" width="auto">
      <RecipeImageCarousel images={images} />
    </Box>
  );
  
};

export default ImageBox;
