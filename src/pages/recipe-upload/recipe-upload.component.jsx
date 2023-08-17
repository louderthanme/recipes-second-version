import { useContext, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid, Paper, Box, FormControl, Typography } from "@mui/material";
import { RecipesContext } from "../../contexts/recipe.context"; // Import the context
import { useNavigate } from "react-router-dom";
import TitleForm from "../../components/title-form/title-form.component";
import IngredientsForm from "../../components/ingredients-form/ingredients-form.component";
import InstructionsForm from "../../components/instructions-form/instructions-form.component";
import TimeForm from "../../components/time-form/time-form.component";
import { useSnackbar } from '../../hooks/useSnackbar';
import SnackbarFormMessage from "../../components/snackbar-form-message/snackbar-form-message.component";
import { UserContext } from "../../contexts/user.context";
import cloudinary from '../../configs/cloudinaryConfig'
import ImageForm from "../../components/image-form/image-form.component";

const RecipeUpload = () => {
  
  const { handleSubmit, control, setValue, formState, reset } = useForm({
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
  const { uploadRecipe } = useContext(RecipesContext);

  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePublicId, setImagePublicId] = useState(null);
  const [snackbar, showSnackbar, hideSnackbar] = useSnackbar();
  const [newRecipeId, setNewRecipeId] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const uploadUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_REACT_APP_CLOUDINARY_NAME}/upload`;

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


  const onSubmit = async (data) => {
    console.log(data);
    try {
      data.ownerUid = user.uid;
      const newId = await uploadRecipe(data);
      showSnackbar("Recipe uploaded successfully!", "success");
      setNewRecipeId(newId);
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
      navigate(`/recipe/${newRecipeId}`);
    }
  }, [newRecipeId, navigate]);

  return (
    <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white" }}>
      <Box p={6}>
        <Typography variant="h3" fontWeight="bold">Recipe Upload Page</Typography>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          {snackbar.open && (
            <SnackbarFormMessage
              message={snackbar.message}
              severity={snackbar.severity}
              position={{ vertical: "top", horizontal: "center" }} 
              onClose={hideSnackbar}
            />
          )}
          <FormControl fullWidth>
            <TitleForm control={control} errors={errors} />
          </FormControl>
          <FormControl fullWidth>
          <ImageForm handleImageUpload={handleImageUpload} cloudinary={cloudinary} imagePublicId={imagePublicId} uploadedImage={uploadedImage} />
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
          <Grid item xs={12}>
            <Box marginTop={5}>
              <Button type="submit" variant="contained" color="primary">Upload Recipe</Button>
            </Box>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default RecipeUpload;