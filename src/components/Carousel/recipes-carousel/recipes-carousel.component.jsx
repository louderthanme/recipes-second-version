import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import CarouselLoading from '../../ui/loading-screens/carousel-loading.component';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Paper, Box, useTheme, useMediaQuery} from '@mui/material';
import CarouselPolaroid from '../carousel-polaroid/carousel-polaroid.component';
import { transformImage } from '../../../utils/utils';

const Carousel = ({recipes}) => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) {
      setSlidesToShow(1);
    } else if (isTablet) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  }, [isMobile, isTablet]);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerPadding: '0',
    centerMode: true,
    className: 'polaroid-slider'
  };

  const goToRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return  <CarouselLoading />;
  }

  return (
    <Paper elevation={4} sx={{ width: '70%', margin: '0 auto', padding: '20px', backgroundColor: '#66101F'}}>
      <Slider {...settings}>
        {recipes.map((recipe, index) => (
          <Box key={index} sx={{ padding: '0 5px' }}>
            <CarouselPolaroid
              image={transformImage(recipe.imageUrl, 300, 400)}
              title={recipe.title}
              onClick={() => goToRecipe(recipe.id)}
            />
          </Box>
        ))}
      </Slider>
    </Paper>
  );
};

export default Carousel;
