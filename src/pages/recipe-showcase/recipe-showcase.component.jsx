import { useContext } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { useParams } from 'react-router-dom';
import { Paper, Typography, Box, Grid, Divider} from '@mui/material';
import InstructionsBox from '../../components/instructions-box/instructions-box.component';

const RecipeShowcase = () => {
  const {recipes} = useContext(RecipesContext);
  const { id } = useParams();

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div> no recipe found </div>;
  }

  const { title, ingredients, image, instructions } = recipe;

  return (
    <Paper elevation={5} sx={{ backgroundColor: 'bisque' }}>
      <Grid container>
        {/* First Row */}
        <Grid item xs={12} sm={6}>
          <Box p={2}>
            <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2}>
            {/* Summary content goes here */}
            <Typography variant="subtitle1">Recipe Summary</Typography>
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
                marginLeft:'4'
              },
            }),
          }}>
            {/* Ingredients content goes here */}
            <Typography variant="subtitle1" align="center" sx={{fontWeight:'bold'}}>Ingredients</Typography>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
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
            <InstructionsBox instructions={instructions} />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RecipeShowcase;
