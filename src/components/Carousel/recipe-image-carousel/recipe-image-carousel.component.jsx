import { Paper, Box } from "@mui/material";
import RecipeImagePolaroid from "../recipe-image-polaroid/recipe-image-polaroid.component";
import Slider from "react-slick";
import CarouselLoading from "../../ui/loading-screens/carousel-loading.component";
import { transformImage } from "../../../utils/utils";


const RecipeImageCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    centerMode: true,
    className: 'polaroid-slider',
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <CarouselLoading />;
  }

  return (
    <Paper elevation={4} sx={{ 
      width: '300px', // set the width
      height: '400px', // set the height
      margin: '0 auto', 
      padding: '20px', 
      backgroundColor: '#ffffff' 
    }}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <Box key={index} sx={{ padding: '0 5px' }}>
            <RecipeImagePolaroid
              image={transformImage(url, 300, 400)}
            />
          </Box>
        ))}
      </Slider>
    </Paper>
  );
};

export default RecipeImageCarousel;
