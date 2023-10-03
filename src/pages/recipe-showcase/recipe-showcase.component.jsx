import { useContext, useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Paper, Box, Grid, Divider, Button } from '@mui/material';

import RecipeShowcaseLoading from '../../components/ui/loading-screens/recipe-showcase-loading.component';
import InstructionsDisplay from '../../components/Recipe/instructions-display/instructions-display.component';
import IngredientsDisplay from '../../components/Recipe/ingredients-display/ingredients-display.component';
import ImageBox from '../../components/Recipe/image-box/image-box.component';
import DetailsBox from '../../components/Recipe/details-box/details-box.component';

import { updateBoxShadow } from '../../utils/utils'
import {useShareWindow} from '../../hooks/useShareWindow';

import { UserContext } from '../../contexts/user.context';
import { RecipesContext } from '../../contexts/recipe.context';


const RecipeShowcase = () => {

  const { user, addRecipeToFavorites, removeRecipeFromFavorites } = useContext(UserContext);
  const { fetchRecipeById } = useContext(RecipesContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [displayHeight, setDisplayHeight] = useState(350);
  const ingredientsRef = useRef(null);
  const instructionsRef = useRef(null);
  

  useEffect(() => {
    const getRecipe = async () => {
      const currentRecipe = await fetchRecipeById(id);
      setRecipe(currentRecipe);
    };

    getRecipe();
  }, [id, fetchRecipeById]);

  const displaysMaxHeight= '300px'
  
  useEffect(() => {
    const handleResize = () => {
      const ingredientsHeight = ingredientsRef.current ? ingredientsRef.current.scrollHeight : 0;
      const instructionsHeight = instructionsRef.current ? instructionsRef.current.scrollHeight : 0;
      
      const height = Math.max(ingredientsHeight, instructionsHeight);
      
      setDisplayHeight(height);
  
      // Update the box shadow based on new maxHeight
      updateBoxShadow(ingredientsRef.current);
      updateBoxShadow(instructionsRef.current);
    };
  
    // Initialize max height and box shadows
    handleResize();
  
    // Listen for window resize events
    window.addEventListener('resize', handleResize);
  
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [recipe, displayHeight]);
  
  const [handleShareClick, ShareWindowComponent] = useShareWindow({title:recipe?.title});


  if (!recipe) {
    return <RecipeShowcaseLoading />;
  }

  const { title, ingredients, imageUrls, instructions, time: { prep, cook }, ownerUid, tags } = recipe;


  

  const goToRecipeEdit = (id) => {
    navigate(`/recipe/${id}/edit`);
  };



  return (
    <Paper elevation={12} sx={{ backgroundColor: '#fdebd7', width: '70%',  padding: '10px', marginBottom: '30px' }}>
    <Grid container spacing={3}>
      {/* First Row */}
      <Grid item xs={12} sm={12} md={12} lg={5}>
        <Box mt={2}>
          <ImageBox images={imageUrls} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={7}>
        <Box p={2}>
          <DetailsBox prep={prep} cook={cook} ingredients={ingredients} title={title} tags={tags}/>
        </Box>
      </Grid>
      {/* Divider */}
      <Grid item xs={12}>
        <Divider />
      </Grid>
      {/* Second Row */}
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Box p={2}>
          <IngredientsDisplay ingredients={ingredients} height={displayHeight} maxHeight={displaysMaxHeight} ref={ingredientsRef} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Box p={2}>
          <InstructionsDisplay instructions={instructions} height={displayHeight} maxHeight={displaysMaxHeight} ref={instructionsRef} />
        </Box>
      </Grid>
      {/* Third Row */}
      <Grid item xs={12}>
        <Box p={1} display="flex" justifyContent="center">
        
          {user?.uid === ownerUid && (
            <>
              <Button variant="contained" onClick={() => goToRecipeEdit(id)}>
                Edit Recipe
              </Button>
              <Box mx={1}></Box>
            </>
          )}
          <Button variant="contained" color="secondary" onClick={handleShareClick}>
            Share Recipe
          </Button>
          {ShareWindowComponent()}
          <Button onClick={()=> addRecipeToFavorites(id)}>
            Add to Favorites
          </Button>
        </Box>

        </Grid>
      </Grid>
    </Paper>
  );
};

export default RecipeShowcase;
