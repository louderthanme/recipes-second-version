import { useContext } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { Box } from '@mui/system';
import Carousel from '../../components/Carousel/recipes-carousel/recipes-carousel.component';

const Home = () => {

  const {recipes} = useContext(RecipesContext);

  return (
    <Box marginTop={4} style={{ width: '80%', height: '400px', margin: '0 auto' }}>
      <Carousel  recipes={recipes}/>
    </Box>
  );
 
};

export default Home;
