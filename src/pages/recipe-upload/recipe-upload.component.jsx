import {v4 as uuidv4} from "uuid";
import { Form, useForm } from "react-hook-form";
import { Button, Grid, Paper, Box, Link, FormControl, Typography } from "@mui/material";
import { StyledTextField } from "../../utils/styledComponents";
import TitleForm from "../../components/title-form/title-form.component";
import IngredientsForm from "../../components/ingredients-form/ingredients-form.component";
import InstructionsForm from "../../components/instructions-form/instructions-form.component";
import TimeForm from "../../components/time-Form/time-form.component";
import { uploadRecipe } from "../../utils/firebase-utils";

const RecipeUpload = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const recipeId = uuidv4();
    const recipeWithId = { ...data, id: recipeId };
    uploadRecipe(recipeWithId);
  };

  return (
    <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white" }}>
      <Box p={6}>
        <Box marginBottom={3}>
          <Typography variant="h3" fontWeight="bold">Recipe Upload Page</Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>

          <FormControl fullWidth>
            <TitleForm control={control} /> 
          </FormControl>

          <FormControl fullWidth>
            <StyledTextField
              {...control.register("image")}
              label="Image Url"
              variant="filled"
              fullWidth
              margin="normal"
            />
          </FormControl>

          <FormControl fullWidth>
            <TimeForm control={control} />
          </FormControl>
         

          <FormControl fullWidth>
            <IngredientsForm control={control}  />
          </FormControl>

          <FormControl fullWidth>
            <InstructionsForm control={control}  />
          </FormControl>
         

          {/* Add more fields here as needed, e.g., for image upload */}
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