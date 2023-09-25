import { Box } from "@mui/material";
import RecipeImagePolaroid from "../recipe-image-polaroid/recipe-image-polaroid.component";
import Slider from "react-slick";
import CarouselLoading from "../../ui/loading-screens/carousel-loading.component";
import { transformImage } from "../../../utils/utils";


const RecipeImageCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    centerMode: true,
    className: 'polaroid-slider',
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <CarouselLoading />;
  }

  return (
    <Box 
     sx={{ 
      width: '420px', // set the width
      margin: '0 auto', 
      paddingY: '5px', 
    }}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <Box key={index} sx={{ padding: '0 5px' }}>
            <RecipeImagePolaroid
              image={transformImage(url, 600, 800)}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default RecipeImageCarousel;
