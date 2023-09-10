import { useContext } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { Box, Typography } from '@mui/material'; // Import Typography from Material-UI
import Carousel from '../../components/Carousel/recipes-carousel/recipes-carousel.component';

const Home = () => {

  const { recipes } = useContext(RecipesContext);

  return (
    <Box marginTop={4} style={{ width: '80%', height: '400px', margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom ml={26} mb={6}> Featured Recipes</Typography>
      <Carousel recipes={recipes} />
    </Box>
  );
};

export default Home;
