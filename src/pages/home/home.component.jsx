import { useContext } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { Box, Typography, Paper, Grid } from '@mui/material'; // Import Typography from Material-UI
import Carousel from '../../components/Carousel/recipes-carousel/recipes-carousel.component';
import { StyledDivider, StyledSearchBar } from '../../utils/styledComponents';
import SearchBarBox from '../../components/ui/search-bar/search-bar-box.component';

const Home = () => {
  const { recipes } = useContext(RecipesContext);

  const backgroundColor="#66101F"

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={11} sm={10} md={8}>
        <Paper elevation={6} style={{ height: '100vh', backgroundColor: '#FCDDBC', color: 'white', borderRadius: '20px' }}>
          <SearchBarBox />
          <StyledDivider />
          <Typography variant="h2" gutterBottom ml={9} mb={6} mt={4} pt={4} sx={{ color: '#517664' }}> Featured Recipes</Typography>
          <Carousel recipes={recipes} backgroundColor={backgroundColor} />
          <Typography variant="h2" gutterBottom ml={9} mb={6} mt={4} pt={4} sx={{ color: '#a17c6b' }}> Mexican Recipes</Typography>
          <Carousel recipes={recipes} backgroundColor={backgroundColor} />  
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;