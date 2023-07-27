import { useForm } from "react-hook-form";
import { Button, Grid, Paper, Box, Link, FormControl } from "@mui/material";
import { StyledTextField } from "../../utils/styledComponents";
import IngredientsForm from "../../components/ingredients-form/ingredients-form.component";

const RecipeUpload = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white" }}>
      <Box p={4}>
        <h1>Recipe Upload Page</h1>
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
            <IngredientsForm control={control} />
          </FormControl>
          <FormControl fullWidth>
            <StyledTextField
              {...control.register("instructions")}
              label="Instructions"
              variant="filled"
              fullWidth
              multiline
              rows={8}
              margin="normal"
            />
          </FormControl>
          {/* Add more fields here as needed, e.g., for image upload */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Upload Recipe
            </Button>
          </Grid>
        </form>
        <Link to="/">Back to Home</Link>
      </Box>
    </Paper>
  );
};

export default RecipeUpload;
