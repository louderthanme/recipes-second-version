// React Core and Hooks
import { useContext, useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";

// Material UI Components
import { Button, Grid, Paper, Box, FormControl, Typography, LinearProgress, TextField, Chip } from "@mui/material";

// Contexts
import { RecipesContext } from "../../contexts/recipe.context";
import { UserContext } from "../../contexts/user.context";

// Custom Components
import TitleForm from "../../components/Recipe/title-form/title-form.component";
import IngredientsForm from "../../components/Recipe/ingredients-form/ingredients-form.component";
import InstructionsForm from "../../components/Recipe/instructions-form/instructions-form.component";
import TimeForm from "../../components/Recipe/time-form/time-form.component";
import ImageForm from "../../components/Recipe/image-form/image-form.component";
import TagForm from "../../components/Recipe/tag-form/tag-form.component";
import SnackbarFormMessage from "../../components/ui/snackbar-form-message/snackbar-form-message.component";


// Custom Hooks and Utilities
import { useNavigate } from "react-router-dom";
import { useSnackbar } from '../../hooks/useSnackbar';

//constnats
import { noImageAvailableUrl } from '../../constants/constants';

const RecipeUpload = () => {
  // Form setup
  const { handleSubmit, control, formState, reset } = useForm({
    defaultValues: {
      title: "",
      time: { prep: null, cook: null },
      ingredients: [{ name: "", quantity: "" }],
      instructions: [{ step: "" }],
      tags: [],
    },
  });
  
  const { errors } = formState;
  
  // Contexts
  const { uploadRecipe, uploadImagesToCloudinary } = useContext(RecipesContext);
  const { user } = useContext(UserContext);
   
  // Hooks and State
  const [isLoading, setIsLoading] = useState(false); // Loading state for form submission
  const [newRecipeId, setNewRecipeId] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");


  const navigate = useNavigate();
  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();
    // Functions and Handle rs
  const onSubmit = async (data) => {
    setIsLoading(true); // Set loading to true to display a progress bar
    try {
      let imageUrls = [];
      if (selectedImages.length > 0) {
        try {
          imageUrls = await uploadImagesToCloudinary(selectedImages);
          } catch (error) {
          showSnackbar("Image upload failed. Please try again.", "error");
        }
      }  
      if (imageUrls.length === 0 && selectedImages.length === 0) {
        console.log('before adding no image available', imageUrls)
        imageUrls = [noImageAvailableUrl];
        console.log('after adding no image available', imageUrls)
      }
      if (imageUrls.length > 0 || selectedImages.length === 0) {
        data.imageUrls = imageUrls;
        data.ownerUid = user.uid;
        data.tags = tags;
        const newId = await uploadRecipe(data);
        showSnackbar("Recipe uploaded successfully!", "success");
        setNewRecipeId(newId);
        reset();
      } else {
        showSnackbar("All image uploads failed. Please try again.", "error");
      }
    } catch (error) {
      showSnackbar("An unexpected error occurred. Please try again.", "error");
    }
    setIsLoading(false); //  Set loading to false when onSubmit finishes (success or error)
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

  const handleAddTag = (e) => {
    if(e.key === "Enter" || e.key === "Tab" || e.key === "," || e.key === " ") {
      e.preventDefault();
      
    const newTag = tagInput.trim().toLocaleLowerCase();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  }

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }

  
  // Effects
  useEffect(() => {
    if (newRecipeId) {
      navigate(`/recipe/${newRecipeId}`);
    }
  }, [newRecipeId, navigate]);
  
  // Rendering
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={11}>
        <Paper 
        elevation={10} 
        sx={{
          backgroundColor: '#fdebd7',
          width: '80%',
          padding: '10px',
          marginBottom: '30px',
          position: 'relative',
          mx: 'auto',
          '@media (max-width:960px)': {
            mx: '0',
            padding:'0', 
            width: '100%',
          },
        }}>
          <Box p={6}>
            <Box marginBottom={3}>
              <Typography variant="h3" fontWeight="bold">Recipe Upload Page</Typography>
            </Box>
            <Box>
                {isLoading && <LinearProgress color="secondary" />}
            </Box>
            <Box sx={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}>
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
                <FormControl fullWidth><TagForm tags={tags} setTags={setTags} tagInput={tagInput} setTagInput={setTagInput}  control={control} errors={formState.errors} handleAddTag={handleAddTag} handleDeleteTag={handleDeleteTag} /></FormControl>
          
                {/* Submit Button */}
                <Grid item xs={12}>
                  <Box marginTop={5}>
                    <Button type="submit" variant="contained" color="secondary" fullWidth>
                      Upload Recipe
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RecipeUpload;
