import React from "react";
import { Box, Grid } from "@mui/material";
import UserProfilePolaroid from "../user-profile-polaroid/user-profile-polaroid.component";

const UserRecipesDisplay = ({ userRecipes, onDeleteRecipe, onClickRecipe, onEditRecipe }) => {
  return (
    <>
      <Box p={3}>
        <Grid container spacing={3}>
          {userRecipes.map((recipe, index) => (
            <Grid item  sm={12} md={6} lg={3} key={index}>
              <UserProfilePolaroid
                image={recipe.imageUrl}
                title={recipe.title}
                onDelete={() => onDeleteRecipe(recipe)}
                onClick={() => onClickRecipe(recipe.id)}
                onEdit={() => onEditRecipe(recipe.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default UserRecipesDisplay;
