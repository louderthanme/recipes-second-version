// React Core and Hooks
import { useContext, useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";

// Material UI Components
import { Button, Grid, Paper, Box, FormControl, Typography, LinearProgress } from "@mui/material";

// Contexts
import { RecipesContext } from "../../contexts/recipe.context";
import { UserContext } from "../../contexts/user.context";

// Custom Components
import TitleForm from "../../components/Recipe/title-form/title-form.component";
import IngredientsForm from "../../components/Recipe/ingredients-form/ingredients-form.component";
import InstructionsForm from "../../components/Recipe/instructions-form/instructions-form.component";
import TimeForm from "../../components/Recipe/time-form/time-form.component";
import ImageForm from "../../components/Recipe/image-form/image-form.component";
import SnackbarFormMessage from "../../components/ui/snackbar-form-message/snackbar-form-message.component";

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
  const { uploadRecipe, uploadImagesToCloudinary } = useContext(RecipesContext);
  const { user } = useContext(UserContext);
  
  // Hooks and State
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const [newRecipeId, setNewRecipeId] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const navigate = useNavigate();
  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();
  
  // Functions and Handlers
  const onSubmit = async (data) => {
    console.log("onSubmit started"); // Log when onSubmit starts
  
    try {
      console.log("Selected Images: ", selectedImages); // Log the selected images
      setLoading(true); // Set loading to true to display a progress bar
  
      let imageUrls = [];
  
      // If images are selected, upload them
      if (selectedImages.length > 0) {
        try {
          console.log("Uploading images: ", selectedImages); // Log the images that are being uploaded
  
          // Note the change here to handle multiple images
          imageUrls = await uploadImagesToCloudinary(selectedImages);
  
          console.log("Image URLs received: ", imageUrls); // Log the received image URLs
        } catch (error) {
          console.log("Image upload failed: ", error); // Log errors if image upload fails
          showSnackbar("Image upload failed. Please try again.", "error");
        }
      }
  
      console.log("Total Image URLs: ", imageUrls); // Log all the image URLs
  
      // Only proceed if at least one image upload succeeded or no images were selected
      if (imageUrls.length > 0 || selectedImages.length === 0) {
        data.imageUrls = imageUrls;
        data.ownerUid = user.uid;
  
        console.log("Uploading recipe with data: ", data); // Log the final data object
  
        const newId = await uploadRecipe(data);
  
        console.log("Recipe uploaded with ID: ", newId); // Log the new recipe ID
  
        showSnackbar("Recipe uploaded successfully!", "success");
        setNewRecipeId(newId);
        reset();
      } else {
        console.log("All image uploads failed"); // Log if all image uploads failed
        showSnackbar("All image uploads failed. Please try again.", "error");
      }
    } catch (error) {
      console.log("An unexpected error occurred: ", error); // Log any unexpected errors
      showSnackbar("An unexpected error occurred. Please try again.", "error");
    }
    setLoading(false); // Set loading to false when onSubmit finishes (success or error)
  };
  

  const onError = (errors, e) => {
    showSnackbar("Error uploading recipe", "error");
  };

  const handleImageChange = (e) => {
    setSelectedImages([...e.target.files]);
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
    <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", width:"70%", marginBottom:'40px'  }}>
      <Box p={6}>
        <Box marginBottom={3}>
          <Typography variant="h3" fontWeight="bold">Recipe Upload Page</Typography>
        </Box>
        <Box>
            {loading && <LinearProgress color="secondary" />}
        </Box>
        <Box sx={{ opacity: loading ? 0.5 : 1, pointerEvents: loading ? 'none' : 'auto' }}>
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
      </Box>
    </Paper>
  );
};

export default RecipeUpload;
