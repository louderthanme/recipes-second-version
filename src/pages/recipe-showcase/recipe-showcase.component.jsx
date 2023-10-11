import { useContext, useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Paper, Box, Grid, Divider, Button, Tooltip, IconButton } from '@mui/material';
import { grey, red, common } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { displaysMaxHeight } from '../../constants/constants';

import RecipeShowcaseLoading from '../../components/ui/loading-screens/recipe-showcase-loading.component';
import InstructionsDisplay from '../../components/Recipe/instructions-display/instructions-display.component';
import IngredientsDisplay from '../../components/Recipe/ingredients-display/ingredients-display.component';
import ImageBox from '../../components/Recipe/image-box/image-box.component';
import BaseDetailsBox from '../../components/Recipe/details-box/base-details-box/base-details-box.component';


import { updateBoxShadow } from '../../utils/utils';
import { useShareWindow } from '../../hooks/useShareWindow';

import { UserContext } from '../../contexts/user.context';
import { RecipesContext } from '../../contexts/recipe.context';

const RecipeShowcase = () => {
  // State hooks
  const [recipe, setRecipe] = useState(null);
  const [displayHeight, setDisplayHeight] = useState(350);
  const [isFavorited, setIsFavorited] = useState(false);

  // Refs
  const ingredientsRef = useRef(null);
  const instructionsRef = useRef(null);

  // Contexts
  const { user, addRecipeToFavorites, removeRecipeFromFavorites, favoriteRecipes } = useContext(UserContext);
  const { fetchRecipeById } = useContext(RecipesContext);

  // Router hooks
  const { id } = useParams();
  const navigate = useNavigate();

  // Custom hooks
  const [handleShareClick, ShareWindowComponent] = useShareWindow({ title: recipe?.title, recipeId: id });

  // Effects
  useEffect(() => {
    const getRecipe = async () => {
      const currentRecipe = await fetchRecipeById(id);
      setRecipe(currentRecipe);
    };
    getRecipe();
  }, [id, fetchRecipeById]);

  useEffect(() => {
    const handleResize = () => {
      const ingredientsHeight = ingredientsRef.current ? ingredientsRef.current.scrollHeight : 0;
      const instructionsHeight = instructionsRef.current ? instructionsRef.current.scrollHeight : 0;
      const height = Math.max(ingredientsHeight, instructionsHeight);
      setDisplayHeight(height);
      updateBoxShadow(ingredientsRef.current);
      updateBoxShadow(instructionsRef.current);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [recipe, displayHeight]);

  useEffect(() => {
    setIsFavorited(favoriteRecipes.includes(id));
  }, [favoriteRecipes, id]);

  // Event handlers and other functions
  const toggleFavorite = async (e) => {
    if (isFavorited) {
      await removeRecipeFromFavorites(id);
    } else {
      await addRecipeToFavorites(id);
    }
    setIsFavorited(!isFavorited);
  };

  const goToRecipeEdit = () => {
    navigate(`/recipe/${id}/edit`);
  };

  // Rendering
  if (!recipe) {
    return <RecipeShowcaseLoading />;
  }

  const { title, ingredients, imageUrls, instructions, time: { prep, cook }, ownerUid, tags } = recipe;


  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={11}>
        <Paper 
        elevation={12} 
        sx={{
          backgroundColor: '#fdebd7',
          width: '70%',
          padding: '10px',
          marginBottom: '30px',
          position: 'relative',
          mx: 'auto',
          '@media (max-width:960px)': {
            mx: '0',
            width:'100%' // Remove margins on smaller screens
          },
        }}>
          <Tooltip title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}>
            <IconButton
              aria-label="toggle-favorite"
              size="small"
              onClick={(e)=>{
                e.stopPropagation();
                toggleFavorite(e, id);
              }}
              sx={{
                position: 'absolute',
                top: '10px',  
                right: '10px', 
                backgroundColor: grey[500],
                '&:hover': {
                  backgroundColor: isFavorited ? red[700] : grey[700],
                },
              }}
            >
              {isFavorited ? 
                <FavoriteIcon sx={{ color: red[500], fontSize: '24px' }} />
                :
                <FavoriteBorderIcon sx={{ color: common.white, fontSize: '24px' }} />
              }
            </IconButton>
          </Tooltip>
        <Grid container spacing={3}>
          {/* First Row */}
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <Box  
                sx={{
                    mt: 2,  // default
                    '@media (max-width:960px)': {
                        mt: 5
                    }
                }}
            >
              <ImageBox images={imageUrls} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={7}>
            <Box p={2}>
             <BaseDetailsBox prep={prep} cook={cook} ingredients={ingredients} title={title} tags={tags}/>
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
            </Box>

            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RecipeShowcase;
