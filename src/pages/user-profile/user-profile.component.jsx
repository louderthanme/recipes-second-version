import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { RecipesContext } from "../../contexts/recipe.context";	
import { Paper, Box} from "@mui/material";
import { StyledDivider } from "../../utils/styledComponents";
import Polaroid from "../../components/recipe-polaroid/recipe-polaroid.component";
import { transformImage } from "../../utils/utils";
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
    <Paper elevation={10} sx={{ backgroundColor: "#FCDDBC", border: "0 0 0 20px solid white" }}>
      <Box p={3}>
        <h1>{user.displayName}</h1>
        <h2>{user.email}</h2>
      </Box>
      <StyledDivider />
      <Box p={3}>
        <h2>Recipes</h2>
        {userRecipes.map((recipe, index) => (
          <Box key={index} sx={{ padding: '0 5px' }}>
            <Polaroid
              image={transformImage(recipe.imageUrl, 300)}
              title={recipe.title}
              onClick={() => goToRecipe(recipe.id)}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default UserProfile;