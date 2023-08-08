import { useContext, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, Paper, Box, FormControl, Typography } from "@mui/material";
import { RecipesContext } from "../../contexts/recipe.context"; // Import the context
import { StyledTextField } from "../../utils/styledComponents";
import { useNavigate } from "react-router-dom";
import TitleForm from "../../components/title-form/title-form.component";
import IngredientsForm from "../../components/ingredients-form/ingredients-form.component";
import InstructionsForm from "../../components/instructions-form/instructions-form.component";
import TimeForm from "../../components/time-form/time-form.component";
import { useSnackbar } from '../../hooks/useSnackbar';
import SnackbarFormMessage from "../../components/snackbar-form-message/snackbar-form-message.component";

const RecipeUpload = () => {
  const { handleSubmit, control, formState, reset } = useForm({
    defaultValues: {
      title: "",
      image: "",
      time: {
        prep: null,
        cook: null,
      },
      ingredients: [{ name: "", quantity: "" }],
      instructions: [{ step: "" }],
    },
  });

  const { errors } = formState;
  const { uploadRecipe} = useContext(RecipesContext); // Access the uploadRecipe function from the context

  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();

  const [newRecipeId, setNewRecipeId] = useState(null);
  const navigate = useNavigate(); // Access the navigate function

  const onSubmit = async (data) => {
    try {
        const newId = await uploadRecipe(data);
        showSnackbar("Recipe uploaded successfully!", "success");
        setNewRecipeId(newId); // Set the ID of the newly uploaded recipe
        reset();
    } catch (error) {
        console.error(error);
        showSnackbar("An unexpected error occurred. Please try again.", "error");
    }
};


  const onError = (errors, e) => {
    console.error(errors, e);
    showSnackbar("Error uploading recipe", "error");
  };


  useEffect(() => {
    if (newRecipeId) {
      console.log("New recipe ID: ", newRecipeId);
      navigate(`/recipe/${newRecipeId}`);
    }
  }, [newRecipeId, navigate]);
  
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
                  position={{ vertical: "top", horizontal: "center" }} // Set position to top-center
                  onClose={handleSnackbarClose}
                  />
                )}
          <FormControl fullWidth>
            <TitleForm control={control} errors={errors} /> 
          </FormControl>

          <FormControl fullWidth>
          <StyledTextField
            {...control.register("image", { required: "Image URL is required" })}
            label="Image Url"
            variant="filled"
            fullWidth
            margin="normal"
          />
          </FormControl>

          <FormControl fullWidth>
            <TimeForm control={control} errors={formState.errors}/>
          </FormControl>
         

          <FormControl fullWidth>
            <IngredientsForm control={control} errors={formState.errors} />
          </FormControl>

          <FormControl fullWidth>
              <InstructionsForm control={control} errors={formState.errors} />
          </FormControl>
         

          {/* Add more fields here as needed, e.g., for image upload */}
          <Grid item xs={12}>
            <Box marginTop={5}>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
            >
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
