import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import CarouselLoading from '../../ui/loading-screens/carousel-loading.component';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Paper, Box, useTheme, useMediaQuery} from '@mui/material';
import RecipesFrontpageCarouselPolaroid from '../recipes-frontpage-carousel-polaroid/recipes-frontpage-carousel-polaroid.component';
import { transformImage } from '../../../utils/utils';

const RecipesFrontpageCarousel = ({recipes, backgroundColor}) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const theme = useTheme();
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
        setSlidesToShow(4);
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
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    centerPadding: '0',
    
    className: 'polaroid-slider',
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const goToRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return  <CarouselLoading />;
  }


  return (
   
   
   <Paper elevation={4} sx={{ width: '82%', margin: '0 auto', padding: '10px', paddingX:'30px', backgroundColor: backgroundColor, overflow:'hidden'}}>
      <Slider {...settings}>
        {recipes.map((recipe, index) => (
          <Box key={index} sx={{ padding: '0 5px' }}>
            <RecipesFrontpageCarouselPolaroid
              image={transformImage(recipe.imageUrls[0], 300, 400)}
              title={recipe.title}
              recipeId={recipe.id}
              onClick={() => goToRecipe(recipe.id)}
            />
          </Box>
        ))}
      </Slider>
    </Paper>




  );
};

export default RecipesFrontpageCarousel;
