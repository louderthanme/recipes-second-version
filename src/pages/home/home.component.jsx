import { useContext, useState } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { Paper, Grid, Box} from '@mui/material'; // Import Typography from Material-UI
import { StyledDivider, StyledSearchBar } from '../../utils/styledComponents';
import SearchBarBox from '../../components/Home/search-bar/search-bar-box.component';
import Featured from '../../components/Home/featured/featured.component';
import SearchResults from '../../components/Home/search-results/search-results.component';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const { recipes, searchRecipes, searchResults } = useContext(RecipesContext);
  const [isSearching, setIsSearching] = useState(false);

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
      <Grid item xs={12} sm={12} md={11}>
      <Paper elevation={6} pb={3} style={{ backgroundColor: '#fdebd7', color: 'white', borderRadius: '20px', marginBottom:'30px' }}>
       
       
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