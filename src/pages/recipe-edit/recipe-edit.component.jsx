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
import SnackbarFormMessage from '../../components/ui/snackbar-form-message/snackbar-form-message.component';
import RecipeEditLoading from '../../components/ui/loading-screens/recipe-edit-loading.component';

import { useSnackbar } from '../../hooks/useSnackbar';

const RecipeEdit = () => {
  // Contexts and hooks
  const { fetchRecipeById, updateRecipe, deleteRecipe, uploadImagesToCloudinary, batchDeleteImagesFromCloudinary } = useContext(RecipesContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [deletedImageUrls, setDeletedImageUrls] = useState([]); 

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
    console.log("newly added images:", Array.from(e.target.files));
    console.log("Before:", selectedImages);
    setSelectedImages([...selectedImages, ...Array.from(e.target.files)]);
    console.log("After:", [...selectedImages, ...Array.from(e.target.files)]);
  };
    // Handle image deletion
    const handleImageDelete = (imageUrl) => {
      // Remove the image URL from the list of image URLs in the recipe
      console.log("Before Deletion: ", recipe.imageUrls);
      const remainingImageUrls = recipe.imageUrls.filter(url => url !== imageUrl);
      console.log("After Deletion: ", remainingImageUrls);

      // Update the recipe state
      setRecipe({...recipe, imageUrls: remainingImageUrls});
      
      // Update the state to include the deleted image URL
      setDeletedImageUrls([...deletedImageUrls, imageUrl]);
    
      showSnackbar('Image deleted successfully!', 'success');
    };
    
  

// Handle form submission
const onSubmit = async (data) => {
  try {
    // Handle image upload
    let newImageUrls = recipe.imageUrls ? [...recipe.imageUrls] : [];
    newImageUrls = newImageUrls.filter(url => !deletedImageUrls.includes(url));

    if (selectedImages.length > 0) {
      const uploadedImageUrls = await uploadImagesToCloudinary(selectedImages);
      if (!uploadedImageUrls || uploadedImageUrls.length === 0) {
        showSnackbar('Image upload failed. Please try again.', 'error');
        return;
      }
      newImageUrls = [...newImageUrls, ...uploadedImageUrls];
    }

    // Create the recipe object
    const updatedRecipeData = {
      title: data.title,
      time: data.time,
      ingredients: data.ingredients,
      instructions: data.instructions,
      imageUrls: newImageUrls,
      // Add any other properties needed
    };

    await batchDeleteImagesFromCloudinary(deletedImageUrls);

    // Update recipe
    await updateRecipe(recipe.id, updatedRecipeData);
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



  // Loading indicator
  if (isLoading) {
    return <RecipeEditLoading />;
  }

 // Render edit form
return (
  // Main paper component for form
  <Paper elevation={10} sx={{ backgroundColor: '#FCDDBC', width:'70%', marginBottom:'40px' }} mb={2}>
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
