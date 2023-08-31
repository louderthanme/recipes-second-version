import React, { useContext, useState, useEffect } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Grid, Paper, Box, FormControl, Typography } from '@mui/material';
import TitleForm from '../../components/title-form/title-form.component';
import IngredientsForm from '../../components/ingredients-form/ingredients-form.component';
import InstructionsForm from '../../components/instructions-form/instructions-form.component';
import TimeForm from '../../components/time-form/time-form.component';
import SnackbarFormMessage from '../../components/snackbar-form-message/snackbar-form-message.component';
import { useSnackbar } from '../../hooks/useSnackbar';

const RecipeEdit = () => {
  const { fetchRecipeById, updateRecipe, deleteRecipe } = useContext(RecipesContext);
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { handleSubmit, control, formState, reset } = useForm();
  const { errors } = formState;
  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    const getRecipeForEdit = async () => {
      const fetchedRecipe = await fetchRecipeById(id);
      if (fetchedRecipe) {
        setRecipe(fetchedRecipe);
        reset({
          title: fetchedRecipe.title || '',
          time: {
            prep: fetchedRecipe.time?.prep || null,
            cook: fetchedRecipe.time?.cook || null,
          },
          ingredients: fetchedRecipe.ingredients || [{ name: '', quantity: '' }],
          instructions: fetchedRecipe.instructions || [{ step: '' }],
        });
      }
    };
    getRecipeForEdit();
  }, [id, fetchRecipeById, reset]);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log('Image Selected:', e.target.files[0]);
  };

  const onSubmit = async (data) => {
    try {
      // Handle the selectedImage upload here, similar to your RecipeUpload component
      // ...

      await updateRecipe(recipe.id, data);
      showSnackbar('Recipe updated successfully!', 'success');
      navigate(`/recipe/${recipe.id}`);
    } catch (error) {
      console.error(error);
      showSnackbar('Error updating recipe. Please try again.', 'error');
    }
  };

  const onError = (errors, e) => {
    console.error(errors, e);
    showSnackbar('Error updating recipe', 'error');
  };

  const onDelete = async () => {
    try {
      await deleteRecipe(recipe.id);
      showSnackbar('Recipe deleted successfully!', 'success');
      navigate('/');
    } catch (error) {
      console.error(error);
      showSnackbar('Error deleting recipe. Please try again.', 'error');
    }
  };

  const handleSnackbarClose = () => {
    hideSnackbar();
  };

  return (
    <Paper elevation={10} sx={{ backgroundColor: '#FCDDBC', border: '0 0 0 20px solid white' }}>
      <Box p={6}>
        <Box marginBottom={3}>
          <Typography variant="h3" fontWeight="bold">
            Edit Recipe
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <SnackbarFormMessage
            message={snackbar.message}
            severity={snackbar.severity}
            position={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleSnackbarClose}
          />
          <FormControl fullWidth>
            <TitleForm control={control} errors={errors} />
          </FormControl>

          <FormControl fullWidth>
            <Typography variant="h5" fontWeight="bold">
              Recipe Image
            </Typography>
            <Box marginBottom={2}>
              {recipe && recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} style={{ maxHeight: '300px' }} />}
            </Box>
            <input type="file" name="imageUrl" accept="image/*" onChange={handleImageChange} />
          </FormControl>

          <FormControl fullWidth>
            <TimeForm control={control} errors={formState.errors} />
          </FormControl>

          <FormControl fullWidth>
            <IngredientsForm control={control} errors={formState.errors} />
          </FormControl>

          <FormControl fullWidth>
            <InstructionsForm control={control} errors={formState.errors} />
          </FormControl>

          <Grid container spacing={1} justifyContent="center" mt={5}>
            <Grid item xs={5}>
              <Button fullWidth type="submit" variant="contained" color="primary">
                Update Recipe
              </Button>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Button fullWidth variant="contained" color="warning" onClick={onDelete}>
                Delete Recipe
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default RecipeEdit;
