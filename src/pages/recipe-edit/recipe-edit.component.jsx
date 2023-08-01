import { useContext, useState } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { useParams } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import SnackbarFormMessage from '../../components/snackbar-form-message/snackbar-form-message.component';
import {v4 as uuidv4} from "uuid";
import { Button, Grid, Paper, Box, FormControl, Typography } from "@mui/material";
import { StyledTextField } from "../../utils/styledComponents";
import TitleForm from "../../components/title-form/title-form.component";
import IngredientsForm from "../../components/ingredients-form/ingredients-form.component";
import InstructionsForm from "../../components/instructions-form/instructions-form.component";
import TimeForm from "../../components/time-Form/time-form.component";
import { uploadRecipe } from "../../utils/firebase-utils";

const RecipeEdit = () =>{
    const {recipes} = useContext(RecipesContext);
    const { id } = useParams();

    if(!recipes){
      return <div>loading...</div>
    }

    const recipe = recipes.find((recipe) =>  recipe.id === id);

    if(!recipe){
      return <div>Recipe not found</div>
    }

    const { title, ingredients, image, instructions, time} = recipe;


    const { handleSubmit, control, formState, reset } = useForm({
      defaultValues: {
        title: recipe?.title || '', // Set title to recipe title if it exists, otherwise empty string
        image: recipe?.image || '', // Set image URL to recipe image if it exists, otherwise empty string
        time: {
          prep: recipe?.time?.prep || ['', ''], // Set prep time to recipe prep time if it exists, otherwise empty array
          cook: recipe?.time?.cook || ['', ''], // Set cook time to recipe cook time if it exists, otherwise empty array
        },
        ingredients: recipe?.ingredients || [{ name: '', quantity: '' }],
        instructions: recipe?.instructions || [{ step: '' }],
      },
    });
        const { errors } = formState;
    
      const [snackbarMessage, setSnackbarMessage] = useState("");
      const [snackbarSeverity, setSnackbarSeverity] = useState("success");
      const [snackbarOpen, setSnackbarOpen] = useState(false);
    
      const handleSnackbarClose = () => {
        setSnackbarOpen(false);
      };
    
      const onSubmit = (data) => {
        console.log(data);
        uploadRecipe(data);
        setSnackbarMessage("Recipe uploaded successfully!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        reset();
      };
    
      const onError = (errors, e) => {
        console.error(errors, e);
        setSnackbarMessage("Recipe upload failed!");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      };
    
    
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
                      position={{ vertical: "top", horizontal: "center" }} // Set position to top-center
                      onClose={handleSnackbarClose}
                      />
                    )}
              <FormControl fullWidth>
                <TitleForm control={control} errors={errors}  /> 
              </FormControl>
    
              <FormControl fullWidth>
              <StyledTextField
                {...control.register("image", { required: "Image URL is required" })}
                label="Image Url"
                variant="filled"
                fullWidth
                margin="normal"
                defaultValue={image}
              />
              </FormControl>
    
              <FormControl fullWidth>
                <TimeForm control={control} errors={formState.errors} />
              </FormControl>
             
    
              <FormControl fullWidth>
                <IngredientsForm control={control} errors={formState.errors} />
              </FormControl>
    
              <FormControl fullWidth>
                  <InstructionsForm control={control} errors={formState.errors}  />
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

export default RecipeEdit;
