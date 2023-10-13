import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import CarouselLoading from '../../ui/loading-screens/carousel-loading.component';
import { useNavigate } from "react-router-dom";
import { Paper, Box, useTheme, useMediaQuery} from '@mui/material';
import RecipesFrontpageCarouselPolaroid from '../recipes-frontpage-carousel-polaroid/recipes-frontpage-carousel-polaroid.component';
import { transformImage } from '../../../utils/utils';
import useSlidesToShow from '../../../hooks/useSlidesToShow';

const RecipesFrontpageCarousel = ({recipes, backgroundColor}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const slidesToShow = useSlidesToShow();
 

  const settings = {
    dots: false,
    infinite: false,
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
          <Box key={index} 
          sx={{ 
            padding: '0 5px'             
            }}>
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
