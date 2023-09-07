import React, { useContext, useState, useEffect } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { useParams, useNavigate } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import { Button, Grid, Paper, Box, FormControl, Typography } from '@mui/material';
import TitleForm from '../../components/title-form/title-form.component';
import IngredientsForm from '../../components/ingredients-form/ingredients-form.component';
import InstructionsForm from '../../components/instructions-form/instructions-form.component';
import TimeForm from '../../components/time-form/time-form.component';
import SnackbarFormMessage from '../../components/snackbar-form-message/snackbar-form-message.component';
import { useSnackbar } from '../../hooks/useSnackbar';
import ImageForm from '../../components/image-form/image-form.component';
import { getPublicIdFromCloudinaryUrl } from '../../utils/utils';

const RecipeEdit = () => {
  const { fetchRecipeById, updateRecipe, deleteRecipe, uploadImageToCloudinary } = useContext(RecipesContext);

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);  




  const [recipe, setRecipe] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const { handleSubmit, control, formState, reset } = useForm();
  const { errors } = formState;

  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();
  const navigate = useNavigate();

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

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

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

  const onError = (errors, e) => {
    showSnackbar('Error updating recipe', 'error');
  };

  const onDelete = async () => {
    console.log("Received in onDelete:", recipe);
    try {
      await deleteRecipe(recipe);
      showSnackbar('Recipe deleted successfully!', 'success');
      navigate('/');
    } catch (error) {
      console.error('Error in onDelete:', error);
      showSnackbar('Error deleting recipe. Please try again.', 'error');
    }
  };

  const handleSnackbarClose = () => {
    hideSnackbar();
  };
  const handleImageDelete = async () => {
    if (!recipe.id) {
      console.error("Cannot delete image: Recipe ID is undefined.");
      return;
    }
    try {
      const publicId = getPublicIdFromCloudinaryUrl(recipe.imageUrl);
  
      const response = await fetch('http://localhost:3001/api/delete-image', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publicId }),
      });
  
      const data = await response.json();
  
      if (data.message === 'Image deleted successfully') {
        const updatedRecipeData = { ...recipe, imageUrl: null }; // Remove imageUrl
        await updateRecipe(recipe.id, updatedRecipeData, null); // Update Firestore
  
        setRecipe(updatedRecipeData); // Update local state
      }
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
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
            <ImageForm handleImageChange={handleImageChange} handleImageDelete={handleImageDelete} recipe={recipe} />
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
