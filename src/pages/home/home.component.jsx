import { useContext } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { Box } from '@mui/system';

import RecipeCarousel from '../../components/recipe-card-carousel/recipe-card-carousel.component';


const Home = () => {
  const {recipes} = useContext(RecipesContext);
  return (
    <Box marginTop={4}> {/* Add margin to create a buffer */}
      <RecipeCarousel recipes={recipes} />
      Add additional content below the carousel
      <div>
        {/* Additional content goes here */}
      </div>

    </Box>
  )
};

export default Home;
