import React from "react";
import { Box, Grid } from "@mui/material";
import UserProfilePolaroid from "../user-profile-polaroid/user-profile-polaroid.component";

const UserRecipesDisplay = ({ userRecipes, onDeleteRecipe, onClickRecipe, onEditRecipe, isToggled }) => {
  return (
    <>
      <Box p={3}>
        <Grid container spacing={3}>
          {userRecipes.map((recipe, index) => (
            <Grid item  sm={12} md={6} lg={3} key={index}>
              <UserProfilePolaroid
                images={recipe.imageUrls}
                title={recipe.title}
                isToggled={isToggled}
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
