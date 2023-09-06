import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { RecipesContext } from "../../contexts/recipe.context";	
import { Paper, Box} from "@mui/material";
import { StyledDivider } from "../../utils/styledComponents";
import UserRecipesDisplay from "../../components/user-recipes-display/user-recipes-display.component";

const UserProfile = () => {
  const { userRecipes, fetchUserRecipes } = useContext(RecipesContext); // Use userRecipes

  const { user } = useContext(UserContext);

  const userId = user ? user.uid : null;
  useEffect(() => {
    if (userId) {
      fetchUserRecipes(userId);
    }
  }, [userId]);

  console.log('after useeffect', userRecipes);

  if (userRecipes === null) {
    return <div>Loading...</div>;
  }

  return (
    <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white", margin:'20px'}}>
      <Box p={2}>
        <h1>{user.displayName}</h1>
        <h2>{user.email}</h2>
      </Box>
      <UserRecipesDisplay
        userRecipes={userRecipes}
        // goToRecipe={goToRecipe}
        // deleteRecipe={deleteRecipe}
      />
    </Paper>
  );
};

export default UserProfile;