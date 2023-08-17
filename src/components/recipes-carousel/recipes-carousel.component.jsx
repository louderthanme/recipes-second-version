import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { Paper, Box } from '@mui/material';
import Polaroid from '../recipe-polaroid/recipe-polaroid.component';

const Carousel = ({recipes}) => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '0',
    centerMode: true,
    className: 'polaroid-slider'
  };

  const goToRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <div>No recipes available.</div>;
  }

  return (
    <Paper elevation={3} sx={{ width: '70%', margin: '0 auto', padding: '20px', backgroundColor: '#FCDDBC'}}>
      <Slider {...settings}>
        {recipes.map((recipe, index) => (
          <Box key={index} sx={{ padding: '0 5px' }}>
            <Polaroid
               image={recipe.imageURL}
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
