import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Paper, Box, Grid, Divider, Button } from '@mui/material';

import RecipeShowcaseLoading from '../../components/ui/loading-screens/recipe-showcase-loading.component';
import InstructionsDisplay from '../../components/Recipe/instructions-display/instructions-display.component';
import IngredientsDisplay from '../../components/Recipe/ingredients-display/ingredients-display.component';
import ImageBox from '../../components/Recipe/image-box/image-box.component';
import DetailsBox from '../../components/Recipe/details-box/details-box.component';
import {useShareWindow} from '../../hooks/useShareWindow';

import { UserContext } from '../../contexts/user.context';
import { RecipesContext } from '../../contexts/recipe.context';

const noImageAvailableUrl = ["https://res.cloudinary.com/recipeb00k/image/upload/v1670364997/Yelp%20Camp/No_Image_Available_dcvsug.jpg"];

const RecipeShowcase = () => {

  const { user } = useContext(UserContext);
  const { fetchRecipeById } = useContext(RecipesContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      const currentRecipe = await fetchRecipeById(id);
      setRecipe(currentRecipe);
    };

    getRecipe();
  }, [id, fetchRecipeById]);

  const [handleShareClick, ShareWindowComponent] = useShareWindow({title:recipe?.title});


  if (!recipe) {
    return <RecipeShowcaseLoading />;
  }

  const { title, ingredients, imageUrls, instructions, time: { prep, cook }, ownerUid } = recipe;

  const goToRecipeEdit = (id) => {
    navigate(`/recipe/${id}/edit`);
  };



  return (
    <Paper elevation={12} sx={{ backgroundColor: '#fdebd7', width: '70%',  padding: '10px', marginBottom: '30px' }}>
    <Grid container spacing={3}>
      {/* First Row */}
      <Grid item xs={12} sm={12} md={12} lg={5}>
        <Box mt={2}>
          <ImageBox images={imageUrls ?? noImageAvailableUrl} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={7}>
        <Box p={2}>
          <DetailsBox prep={prep} cook={cook} ingredients={ingredients} title={title} />
        </Box>
      </Grid>
      {/* Divider */}
      <Grid item xs={12}>
        <Divider />
      </Grid>
      {/* Second Row */}
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Box p={2}>
          <IngredientsDisplay ingredients={ingredients} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Box p={2}>
          <InstructionsDisplay instructions={instructions} />
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
        </Box>

        </Grid>
      </Grid>
    </Paper>
  );
};

export default RecipeShowcase;
