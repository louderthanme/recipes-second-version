import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import RecipeShowcaseImagePolaroid from "../recipe-showcase-image-polaroid/recipe-showcase-image-polaroid.component";
import Slider from "react-slick";
import CarouselLoading from "../../ui/loading-screens/carousel-loading.component";
import { transformImage } from "../../../utils/utils";


const RecipeShowcaseImageCarousel = ({ images }) => {
  const theme = useTheme();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    centerMode: true,
    className: 'polaroid-slider',
    autoplay: images.length > 1 ? true : false,
    autoplaySpeed: 3000,
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <CarouselLoading />;
  }

  return (
  <Box 
     sx={{ 
      width: '90%', // default width for larger screens
      '@media (max-width: 1550px)': {
        width: '80%', 
      },
      margin: '0 auto', 
      paddingY: '5px', 
    }}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <Box key={index} sx={{ padding: '0 0px' }}>
            <RecipeShowcaseImagePolaroid
              image={transformImage(url, 600, 800)}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default RecipeShowcaseImageCarousel;
