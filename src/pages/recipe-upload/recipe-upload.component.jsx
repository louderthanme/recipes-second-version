// React Core and Hooks
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

// Material UI Components
import { Button, Grid, Paper, Box, FormControl, Typography } from "@mui/material";

// Contexts
import { RecipesContext } from "../../contexts/recipe.context";
import { UserContext } from "../../contexts/user.context";

// Custom Components
import TitleForm from "../../components/Recipe/title-form/title-form.component";
import IngredientsForm from "../../components/Recipe/ingredients-form/ingredients-form.component";
import InstructionsForm from "../../components/Recipe/instructions-form/instructions-form.component";
import TimeForm from "../../components/Recipe/time-form/time-form.component";
import ImageForm from "../../components/Recipe/image-form/image-form.component";
import SnackbarFormMessage from "../../components/snackbar-form-message/snackbar-form-message.component";

// Custom Hooks and Utilities
import { useNavigate } from "react-router-dom";
import { useSnackbar } from '../../hooks/useSnackbar';

const RecipeUpload = () => {
  // Form setup
  const { handleSubmit, control, formState, reset } = useForm({
    defaultValues: {
      title: "",
      time: { prep: null, cook: null },
      ingredients: [{ name: "", quantity: "" }],
      instructions: [{ step: "" }],
    },
  });
  
  const { errors } = formState;
  
  // Contexts
  const { uploadRecipe, uploadImageToCloudinary } = useContext(RecipesContext);
  const { user } = useContext(UserContext);
  
  // Hooks and State
  const [newRecipeId, setNewRecipeId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();
  
  // Functions and Handlers
  const onSubmit = async (data) => {
    try {
      // First, upload the image if selected
      if (selectedImage) {
        try {
          const imageUrl = await uploadImageToCloudinary(selectedImage);
          data.imageUrl = imageUrl;  // Add imageUrl to the data object
        } catch (error) {
          showSnackbar("Image upload failed. Please try again.", "error");
          return; // Exit the function if image upload fails
        }
      }
      // Then proceed with uploading the recipe
      data.ownerUid = user.uid;
      const newId = await uploadRecipe(data, data.imageUrl); // Pass data and data.imageUrl
      showSnackbar("Recipe uploaded successfully!", "success");
      setNewRecipeId(newId); // Set the ID of the newly uploaded recipe
      reset();
    } catch (error) {
      showSnackbar("An unexpected error occurred. Please try again.", "error");
    }
  };

  const onError = (errors, e) => {
    showSnackbar("Error uploading recipe", "error");
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSnackbarClose = () => {
    hideSnackbar();
  };

  // Effects
  useEffect(() => {
    if (newRecipeId) {
      navigate(`/recipe/${newRecipeId}`);
    }
  }, [newRecipeId, navigate]);
  
  // Rendering
  return (
    <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white" }}>
      <Box p={6}>
        <Box marginBottom={3}>
          <Typography variant="h3" fontWeight="bold">Recipe Upload Page</Typography>
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
          {/* Form Fields */}
          <FormControl fullWidth><TitleForm control={control} errors={errors} /></FormControl>
          <FormControl fullWidth><ImageForm handleImageChange={handleImageChange} /></FormControl>
          <FormControl fullWidth><TimeForm control={control} errors={formState.errors} /></FormControl>
          <FormControl fullWidth><IngredientsForm control={control} errors={formState.errors} /></FormControl>
          <FormControl fullWidth><InstructionsForm control={control} errors={formState.errors} /></FormControl>
          {/* Submit Button */}
          <Grid item xs={12}>
            <Box marginTop={5}>
              <Button type="submit" variant="contained" color="primary">
                Upload Recipe
              </Button>
            </Box>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default RecipeUpload;
