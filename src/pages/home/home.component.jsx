import { useContext } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { Box, Typography, Paper, Grid } from '@mui/material'; // Import Typography from Material-UI
import Carousel from '../../components/Carousel/recipes-carousel/recipes-carousel.component';

const Home = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={11} sm={10} md={8}>
      <Paper elevation={3} style={{ height: '100vh', backgroundColor: '#db9d47', color: 'white', borderRadius: '20px' }}>
          <Typography variant="h2" gutterBottom ml={10} mb={6} mt={4} pt={4} sx={{ color: 'white' }}> Featured Recipes</Typography>
          <Carousel recipes={recipes} />
          <Typography variant="h2" gutterBottom ml={10} mb={6} mt={4} pt={4} sx={{ color: 'white' }}> Mexican Recipes</Typography>
          <Carousel recipes={recipes} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;