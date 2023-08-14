import { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { useParams, useNavigate } from 'react-router-dom';
import { Paper, Box, Grid, Divider, Button, useTheme, useMediaQuery} from '@mui/material';
import InstructionsDisplay from '../../components/instructions-display/instructions-display.component';
import IngredientsDisplay from '../../components/ingredients-display/ingredients-display.component';
import ImageBox from '../../components/image-box/image-box.component';
import DetailsBox from '../../components/details-box/details-box.component';
import { UserContext } from '../../contexts/user.context';

const RecipeShowcase = () => {
  const {user}=useContext(UserContext);   

  const { fetchRecipeById} = useContext(RecipesContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      const currentRecipe = await fetchRecipeById(id);
      setRecipe(currentRecipe);
    }

    getRecipe();
  }, [id, fetchRecipeById]);

  if (!recipe) {
    return <div> loading </div>;
  }


  const { title, ingredients, image, instructions, time: { prep, cook }, ownerUid } = recipe;

  const goToRecipeEdit = (id) => {
    navigate(`/recipe/${id}/edit`);
  };

  return (
    <Paper elevation={12} sx={{ backgroundColor: '#FCDDBC' }}>
      <Grid container justifyContent="center">
        {/* First Row */}
        <Grid item xs={12} sm={6}>
          <Box margin={2}>
              <ImageBox image={image}/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} marginLeft={2} marginTop={4}>
            {/* Summary content goes here */}
            <DetailsBox prep={prep} cook={cook} ingredients={ingredients} title={title}/>
            {/* Other summary elements */}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Divider /> {/* Divider between the rows */}
        </Grid>
        {/* Second Row */}
        <Grid item xs={12} sm={6}>
          <Box p={2} sx={{
            ...(theme) => ({
              [theme.breakpoints.down('m')]: {
                padding: theme.spacing(2),
                marginLeft:'4',
                marginBottom: '3'
              },
            }),
          }}>
            {/* Ingredients content goes here */}
           <IngredientsDisplay ingredients={ingredients} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} sx={{
            ...(theme) => ({
              [theme.breakpoints.down('m')]: {
                padding: theme.spacing(2),
                marginRight: theme.spacing(6),
                paddingLeft: '0',
                marginBottom: '3' 
              },
            }),
          }}>
            {/* Instructions content goes here */}
            <InstructionsDisplay instructions={instructions} />
          </Box>
        </Grid>
      </Grid>
      

      <Grid >
        <Box p={1} display="flex" justifyContent="center" mb={4}>
          { user?.uid === ownerUid &&  
            <Button variant="contained" onClick={() => goToRecipeEdit(id)}>
              Edit Recipe
            </Button>
          }
        </Box>
      </Grid>
      
      
    </Paper>
  );
};


export default RecipeShowcase;