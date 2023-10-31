// React and hooks
import { useContext, useEffect, useState, useRef } from 'react';

// Router
import { useParams, useNavigate } from 'react-router-dom';

// Material UI components and colors
import { Paper, Box, Grid, Divider, Button, Tooltip, IconButton } from '@mui/material';
import { grey, red, common } from '@mui/material/colors';

// Material UI icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Constants
import { displaysMaxHeight } from '../../constants/constants';

// Components
import RecipeShowcaseLoading from '../../components/ui/loading-screens/recipe-showcase-loading.component';
import InstructionsDisplay from '../../components/Recipe/instructions-display/instructions-display.component';
import IngredientsDisplay from '../../components/Recipe/ingredients-display/ingredients-display.component';
import ImageBox from '../../components/Recipe/image-box/image-box.component';
import BaseDetailsBox from '../../components/Recipe/details-box/base-details-box/base-details-box.component';

// Utils
import { updateBoxShadow } from '../../utils/utils';

// Hooks
import { useShareWindow } from '../../hooks/useShareWindow';

// Contexts
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
    <Grid container justifyContent="center" alignItems="center" overflow={'hidden'}>
      <Grid item xs={12} sm={12} md={11}>
        <Paper 
        elevation={12}
        overflow="hidden" 
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
            <Tooltip title={user? isFavorited ? "Remove from Favorites" : "Add to Favorites" : "Login in to add to favorites"}>
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
                  <Button variant="contained" color='warning' sx={{fontFamily: 'Architects Daughter'}} onClick={() => goToRecipeEdit(id)}>
                    Edit Recipe
                  </Button>
                  <Box mx={1}></Box>
                </>
              )}
              <Button variant="contained" color="secondary" sx={{fontFamily: 'Architects Daughter'}} onClick={handleShareClick}>
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

/*This component, RecipeShowcase, is responsible for displaying a detailed view of a specific recipe. 
The function `toggleFavorite` is defined to handle the action of adding or removing a recipe from the user's favorites. If the recipe is already in the favorites, it will be removed, and if it's not, it will be added. The state variable `isFavorited` is updated accordingly.
The function `goToRecipeEdit` is defined to handle navigation to the edit page for the current recipe.
The component checks if the `recipe` object exists. If it doesn't, it returns a `RecipeShowcaseLoading` component, which presumably displays a loading state.
If the `recipe` object does exist, it destructures various properties from the `recipe` object, including `title`, `ingredients`, `imageUrls`, `instructions`, `time`, `ownerUid`, and `tags`.
The component then returns a `Grid` component that contains a `Paper` component. Inside the `Paper` component, it includes a `Tooltip` and an `IconButton`. The `IconButton` is used to toggle whether the recipe is favorited or not.
Overall, this component provides a detailed view for a recipe, with options to favorite the recipe and navigate to its edit page.
*/