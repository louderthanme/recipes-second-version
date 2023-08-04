import React, { useContext, useState, useEffect } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SnackbarFormMessage from '../../components/snackbar-form-message/snackbar-form-message.component';
import { Button, Grid, Paper, Box, FormControl, Typography } from "@mui/material";
import { StyledTextField } from "../../utils/styledComponents";
import TitleForm from "../../components/title-form/title-form.component";
import IngredientsForm from "../../components/ingredients-form/ingredients-form.component";
import InstructionsForm from "../../components/instructions-form/instructions-form.component";
import TimeForm from "../../components/time-form/time-form.component";

const RecipeEdit = () => {
  const { recipes, updateRecipe, deleteRecipe } = useContext(RecipesContext); // Access the recipes array and the updateRecipe function from the context
  const { id } = useParams();
  
  const [recipe, setRecipe] = useState();

  const { handleSubmit, control, formState, reset } = useForm();

  useEffect(() => {
    if (recipes) {
      const foundRecipe = recipes.find((recipe) => recipe.id === id);
      console.log(foundRecipe);
      setRecipe(foundRecipe);

      // Reset form with new defaultValues
      reset({
        title: foundRecipe?.title || '',
        image: foundRecipe?.image || '',
        time: {
          prep: foundRecipe?.time?.prep || ['', ''],
          cook: foundRecipe?.time?.cook || ['', ''],
        },
        ingredients: foundRecipe?.ingredients || [{ name: '', quantity: '' }],
        instructions: foundRecipe?.instructions || [{ step: '' }],
      });
    }
  }, [recipes, id, reset]);

  const { errors } = formState;

  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    await updateRecipe(recipe.id, data); // Use the updateRecipe function from the context
    setSnackbarMessage("Recipe updated successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    navigate(`/recipe/${recipe.id}`);
  };
  

  const onError = (errors, e) => {
    console.error(errors, e);
    setSnackbarMessage("Recipe update failed!");
    setSnackbarSeverity("error");
    setSnackbarOpen(true);
  };

  const onDelete = async () => {
    await deleteRecipe(recipe);
    setSnackbarMessage("Recipe deleted successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    navigate(`/`);
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
          {snackbarOpen && (
            <SnackbarFormMessage
              message={snackbarMessage}
              severity={snackbarSeverity}
              position={{ vertical: "top", horizontal: "center" }}
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
            <TimeForm control={control} errors={formState.errors} />
          </FormControl>


          <FormControl fullWidth>
            <IngredientsForm control={control} errors={formState.errors} />
          </FormControl>

          <FormControl fullWidth>
            <InstructionsForm control={control} errors={formState.errors} />
          </FormControl>

          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={5}>
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
