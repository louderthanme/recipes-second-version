import { Box } from "@mui/material";
import RecipeShowcaseImageCarousel from "../../Carousel/recipe-showcase-image-carousel/recipe-showcase-image-carousel.component";

const ImageBox = ({ images }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="auto" width="auto">
      <RecipeShowcaseImageCarousel images={images} />
    </Box>
  );
  
};

export default ImageBox;
