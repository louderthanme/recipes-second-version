import React from "react";
import { Box, Grid, FormControlLabel, Switch } from "@mui/material";
import { StyledDivider } from "../../../utils/styledComponents";
import UserProfilePolaroid from "../user-profile-polaroid/user-profile-polaroid.component";

const UserRecipesDisplay = ({ userRecipes, onDeleteRecipe, onClickRecipe, onEditRecipe }) => {
  return (
    <>
      <StyledDivider />
      <Box 
      px={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
      >
        <h2>My Recipes</h2>
        <FormControlLabel control={<Switch color="secondary" />} label="Manage" />
      </Box>
      <StyledDivider />
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
