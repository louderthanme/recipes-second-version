import React, { useContext, useState, useEffect } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SnackbarFormMessage from '../../components/snackbar-form-message/snackbar-form-message.component';
import { Button, Grid, Paper, Box, FormControl, Typography } from "@mui/material";
import TitleForm from "../../components/title-form/title-form.component";
import IngredientsForm from "../../components/ingredients-form/ingredients-form.component";
import InstructionsForm from "../../components/instructions-form/instructions-form.component";
import TimeForm from "../../components/time-form/time-form.component";
import { useSnackbar } from '../../hooks/useSnackbar';

const RecipeEdit = () => {
  const { fetchRecipeById, updateRecipe, deleteRecipe } = useContext(RecipesContext); // Access the recipes array and the updateRecipe function from the context
  const { id } = useParams();
  
  const [recipe, setRecipe] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePublicId, setImagePublicId] = useState(null);

  const { handleSubmit, control, formState, reset, setValue } = useForm();

  useEffect(() => {
    const getRecipeForEdit = async () => {
      const fetchedRecipe = await fetchRecipeById(id);
      if(fetchedRecipe) {
        setRecipe(fetchedRecipe);
        
        // Reset form with the fetchedRecipe data
        reset({
          title: fetchedRecipe.title || '',
          image: fetchedRecipe.image || '',
          time: {
            prep: fetchedRecipe.time?.prep || ['', ''],
            cook: fetchedRecipe.time?.cook || ['', ''],
          },
          ingredients: fetchedRecipe.ingredients || [{ name: '', quantity: '' }],
          instructions: fetchedRecipe.instructions || [{ step: '' }],
        });
      }
    };

    getRecipeForEdit();
  }, [id, fetchRecipeById, reset]);

  const { errors } = formState;

  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();
  const navigate = useNavigate();
  const uploadUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_REACT_APP_CLOUDINARY_NAME}/upload`;

  const handleSnackbarClose = () => {
    hideSnackbar();
  };


  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET); // Replace with your preset

    try {
      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      setUploadedImage(data.secure_url);
      const publicId = data.secure_url.split('/').slice(-2).join('/');
      setImagePublicId(publicId);
      setValue('imagePublicId', publicId); // Update the image field in the form with the public ID
      setValue('imageURL', data.secure_url); // Store the full URL too
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageDelete = async (publicId) => {
    if(!publicId) return;

    const url = uploadUrl + `?public_id=${publicId}`
    try {
      await fetch(url, { method: 'DELETE' });
      setUploadedImage(null);
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };



  const onSubmit = async (data) => {
    try {
      if(uploadedImage) {
        await handleImageDelete(recipe.imagePublicId);
        data.image = uploadedImage;
        data.imagePublicId = imagePublicId;
      }
        await updateRecipe(recipe.id, data);
        showSnackbar("Recipe updated successfully!", "success");
        navigate(`/recipe/${recipe.id}`);
    } catch (error) {
        console.error(error);
        showSnackbar("Error updating recipe. Please try again.", "error");
    }
};

  const onError = (errors, e) => {
    console.error(errors, e);
    showSnackbar("Error updating recipe", "error");
  };

  const onDelete = async () => {
    try {
        await deleteRecipe(recipe);
        showSnackbar("Recipe deleted successfully!", "success");
        navigate(`/`);
    } catch (error) {
        console.error(error);
        showSnackbar("Error deleting recipe. Please try again.", "error");
    }
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white" }}>
      <Box p={6}>
        <Box marginBottom={3}>
          <Typography variant="h3" fontWeight="bold">Edit </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          {snackbar.open && (
            <SnackbarFormMessage
              message={snackbar.message}
              severity={snackbar.severity}
              position={{ vertical: "top", horizontal: "center" }}
              onClose={handleSnackbarClose}
            />
          )}
          <FormControl fullWidth>
            <TitleForm control={control} errors={errors} />
          </FormControl>

          <FormControl fullWidth>
            <input type="file" onChange={handleImageUpload} />
            {uploadedImage  && (<img src={uploadedImage} alt="Uploaded preview" />)}
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
              <Grid item xs={5} >
               
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Update Recipe
                </Button>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <Button
                  fullWidth
                  variant="contained"
                  color="warning"
                  onClick={onDelete}
                >
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
