import React from "react";
import { Box, Grid, Button } from "@mui/material";
import UserProfilePolaroid from "../user-profile-polaroid/user-profile-polaroid.component";

const UserRecipesDisplay = ({ userRecipes, onDeleteRecipe, onClickRecipe, onEditRecipe, isToggled, onRemoveFromFavorites, type, goToRecipeUpload }) => {
  return (
    <>
      {userRecipes?.length === 0 && type === "own" ? (
        <Box p={5} sx={{ textAlign: 'center' }}>
          <Box m={2} sx={{ fontSize: '20px' }}>
            No recipes to display
          </Box>
          <Box m={2}>
            <Button variant="contained" color="secondary" onClick={goToRecipeUpload}>
              Upload your first recipe!
            </Button>
          </Box>
        </Box>
      ) : userRecipes?.length > 0 && type === "own" ? (
        <Box p={3}>
          <Grid container spacing={3}>
            {userRecipes.map((recipe, index) => (
              <Grid item sm={12} md={6} lg={3} key={index}>
                <UserProfilePolaroid
                  images={recipe.imageUrls}
                  title={recipe.title}
                  isToggled={isToggled}
                  onDelete={() => onDeleteRecipe(recipe)}
                  onClick={() => onClickRecipe(recipe.id)}
                  onEdit={() => onEditRecipe(recipe.id)}
                  onRemove={() => onRemoveFromFavorites(recipe.id)}
                  type={type}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : type === "favorite" ? (
        <Box p={5} sx={{ textAlign: 'center' }}>
          <Box m={2} sx={{ fontSize: '20px' }}>
            Discover your new favorite recipe!
          </Box>
          {/* You can add more elements here or a button to discover recipes */}
        </Box>
      ) : null}
    </>
  );
};
export default UserRecipesDisplay;
