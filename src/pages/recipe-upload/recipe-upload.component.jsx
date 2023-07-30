import { useForm } from "react-hook-form";
import { Button, Grid, Paper, Box, Link, FormControl, Typography } from "@mui/material";
import { StyledTextField } from "../../utils/styledComponents";
import IngredientsForm from "../../components/ingredients-form/ingredients-form.component";
import InstructionsForm from "../../components/instructions-form/instructions-form.component";

const RecipeUpload = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white" }}>
      <Box p={4}>
        <Typography variant="h3" fontWeight="bold">Recipe Upload Page</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth>
            <StyledTextField
              {...control.register("title")}
              label="Recipe Title"
              variant="filled"
              fullWidth
              margin="normal"
              autoFocus
            />
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
