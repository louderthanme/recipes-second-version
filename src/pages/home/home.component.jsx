import { useContext, useState } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { Paper, Grid, Box, Typography} from '@mui/material'; // Import Typography from Material-UI
import { StyledDivider } from '../../utils/styledComponents';
import SearchBarBox from '../../components/Home/search-bar/search-bar-box.component';
import Featured from '../../components/Home/featured/featured.component';
import SearchResults from '../../components/Home/search-results/search-results.component';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const { recipes, searchRecipes, searchResults } = useContext(RecipesContext);
  const [isSearching, setIsSearching] = useState(false);

  /* Handles the change event of the search bar input. 
    If the query length is greater than 0, sets isSearching to true and calls searchRecipes function with the query as argument.
    If the query length is 0, sets isSearching to false.
   */
  const handleChange = (e) => {
    const query = e.target.value;

    if (query.length > 0) {
      setIsSearching(true);
      searchRecipes(query);
    } else {  
      setIsSearching(false);
    }
  };

  const goToRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={11}>
        <Paper 
        elevation={10} 
        sx={{
          backgroundColor: '#fdebd7',
          width: '80%',
          padding: '10px',
          marginBottom: '30px',
          position: 'relative',
          mx: 'auto',
          '@media (max-width:960px)': {
            mx: '0',
            padding:'0', 
            width: '100%',
          },
        }}>
        <Typography variant="h1" fontWeight="bold" mt={2} pt={4} mb={1} textAlign={'center'} sx={{ color: '#750303', fontFamily: 'Caveat' }}>
          Nibble Notebook
        </Typography>
        <SearchBarBox handleChange={handleChange} />
        <StyledDivider />

        {isSearching ? (
          // Render the search results here
          <Box>
            <SearchResults 
              searchResults={searchResults}
              onClickRecipe={goToRecipe}
            />
          </Box>
        ) : (
          <Featured recipes={recipes} />
        )}
      </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;