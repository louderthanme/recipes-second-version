import React, { useContext, useState, useEffect } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Grid, Paper, Box, FormControl, Typography } from '@mui/material';

import IngredientsForm from '../../components/Recipe/ingredients-form/ingredients-form.component';
import InstructionsForm from '../../components/Recipe/instructions-form/instructions-form.component';
import TimeForm from '../../components/Recipe/time-form/time-form.component';
import TitleForm from '../../components/Recipe/title-form/title-form.component';
import ImageForm from '../../components/Recipe/image-form/image-form.component';
import SnackbarFormMessage from '../../components/snackbar-form-message/snackbar-form-message.component';

import { useSnackbar } from '../../hooks/useSnackbar';
import { getPublicIdFromCloudinaryUrl } from '../../utils/utils';

const RecipeEdit = () => {
  // Contexts and hooks
  const { fetchRecipeById, updateRecipe, deleteRecipe, uploadImageToCloudinary } = useContext(RecipesContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const { handleSubmit, control, formState, reset } = useForm();
  const { errors } = formState;

  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();
  const navigate = useNavigate();

  // Fetch recipe for editing on component mount
  useEffect(() => {
    const getRecipeForEdit = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };
    getRecipeForEdit();
  }, [id, fetchRecipeById, reset]);

  // Handle image selection
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      let newImageUrl = null;

      if (selectedImage) {
        newImageUrl = await uploadImageToCloudinary(selectedImage);
        if (!newImageUrl) {
          showSnackbar('Image upload failed. Please try again.', 'error');
          return;
        }
      }

      await updateRecipe(recipe.id, data, newImageUrl);
      showSnackbar('Recipe updated successfully!', 'success');
      navigate(`/recipe/${recipe.id}`);
    } catch (error) {
      console.error('Error in onSubmit:', error);
      showSnackbar('Error updating recipe. Please try again.', 'error');
    }
  };

  // Handle form validation errors
  const onError = (errors, e) => {
    showSnackbar('Error updating recipe', 'error');
  };

  // Handle recipe deletion
  const onDelete = async () => {
    try {
      await deleteRecipe(recipe);
      showSnackbar('Recipe deleted successfully!', 'success');
      navigate('/');
    } catch (error) {
      console.error('Error in onDelete:', error);
      showSnackbar('Error deleting recipe. Please try again.', 'error');
    }
  };

  // Handle Snackbar close
  const handleSnackbarClose = () => {
    hideSnackbar();
  };

  // Handle image deletion
  const handleImageDelete = async () => {
    // More code here...
  };

  // Loading indicator
  if (isLoading) {
    return <div>Loading...</div>;
  }

 // Render edit form
return (
  // Main paper component for form
  <Paper elevation={10} sx={{ backgroundColor: '#FCDDBC', border: '0 0 0 20px solid white' }}>
    <Box p={6}>
      {/* Header */}
      <Box marginBottom={3}>
        <Typography variant="h3" fontWeight="bold">
          Edit Recipe
        </Typography>
      </Box>

      {/* Form submission */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        
        {/* Snackbar for messages */}
        <SnackbarFormMessage
          message={snackbar.message}
          severity={snackbar.severity}
          position={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleSnackbarClose}
        />

        {/* Title input field */}
        <FormControl fullWidth>
          <TitleForm control={control} errors={errors} />
        </FormControl>

        {/* Image input and delete button */}
        <FormControl fullWidth>
          <ImageForm handleImageChange={handleImageChange} handleImageDelete={handleImageDelete} recipe={recipe} />
        </FormControl>

        {/* Time input fields (prep and cook time) */}
        <FormControl fullWidth>
          <TimeForm control={control} errors={formState.errors} />
        </FormControl>

        {/* Ingredients input fields */}
        <FormControl fullWidth>
          <IngredientsForm control={control} errors={formState.errors} />
        </FormControl>

        {/* Instructions input fields */}
        <FormControl fullWidth>
          <InstructionsForm control={control} errors={formState.errors} />
        </FormControl>

        {/* Buttons for updating and deleting the recipe */}
        <Grid container spacing={1} justifyContent="center" mt={5}>
          {/* Update Recipe Button */}
          <Grid item xs={5}>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Update Recipe
            </Button>
          </Grid>

          {/* Spacer */}
          <Grid item xs={1}></Grid>

          {/* Delete Recipe Button */}
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
}


export default RecipeEdit;
