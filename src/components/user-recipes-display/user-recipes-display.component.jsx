import React from "react";
import { Box, Grid, FormControlLabel, Switch } from "@mui/material";
import { StyledDivider } from "../../utils/styledComponents";
import UserProfilePolaroid from "../user-profile-polaroid/user-profile-polaroid.component";

const UserRecipesDisplay = ({ userRecipes }) => {
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
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <UserProfilePolaroid
                image={recipe.imageUrl}
                title={recipe.title}
                // onClick={() => goToRecipe(recipe.id)}
                // onDelete={() => deleteRecipe(recipe.id)}  
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default UserRecipesDisplay;
