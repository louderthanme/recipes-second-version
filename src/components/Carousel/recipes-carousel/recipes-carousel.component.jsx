import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import CarouselLoading from '../../ui/loading-screens/carousel-loading.component';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Paper, Box, useTheme, useMediaQuery} from '@mui/material';
import RecipesCarouselPolaroid from '../recipes-carousel-polaroid/recipes-carousel-polaroid.component';
import { transformImage } from '../../../utils/utils';

const Carousel = ({recipes, backgroundColor}) => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const navigate = useNavigate();

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
  
      if (width <= theme.breakpoints.values.sm) {
        setSlidesToShow(1);
      } else if (width > theme.breakpoints.values.sm && width <= theme.breakpoints.values.md) {
        setSlidesToShow(2);
      } else if (width > theme.breakpoints.values.md && width <= theme.breakpoints.values.lg) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
  
    // Initialize slides
    updateSlidesToShow();
  
    // Update slides when the window resizes
    window.addEventListener('resize', updateSlidesToShow);
  
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, [theme.breakpoints]);
  
  


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
   
   
   <Paper elevation={4} sx={{ width: '70%', margin: '0 auto', padding: '20px', backgroundColor: backgroundColor}}>
      <Slider {...settings}>
        {recipes.map((recipe, index) => (
          <Box key={index} sx={{ padding: '0 5px' }}>
            <RecipesCarouselPolaroid
              image={transformImage(recipe.imageUrls[0], 300, 400)}
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
