import { useContext, useState } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { Paper, Grid, Box} from '@mui/material'; // Import Typography from Material-UI
import { StyledDivider, StyledSearchBar } from '../../utils/styledComponents';
import SearchBarBox from '../../components/Home/search-bar/search-bar-box.component';
import Featured from '../../components/Home/featured/featured.component';


const Home = () => {
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

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={11} sm={10} md={8}>
      <Paper elevation={6} style={{ height: '100vh', backgroundColor: '#FCDDBC', color: 'white', borderRadius: '20px' }}>
       
       
        <SearchBarBox handleChange={handleChange} />
        <StyledDivider />

        {isSearching ? (
          // Render the search results here
          <Box>
            {searchResults.map((recipe, index) => (
              <Box key={index}>{recipe.title}</Box>
            ))}
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