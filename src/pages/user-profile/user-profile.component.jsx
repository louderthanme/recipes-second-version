import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { RecipesContext } from "../../contexts/recipe.context";	
import { Paper, Box} from "@mui/material";
import { StyledDivider } from "../../utils/styledComponents";
import { transformImage } from "../../utils/utils";
import UserProfilePolaroid from "../../components/user-profile-polaroid/user-profile-polaroid.component";

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
      <Box p={3} sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
        {userRecipes.map((recipe, index) => (
          <UserProfilePolaroid
            key={index}
            image={transformImage(recipe.imageUrl, 300)}
            title={recipe.title}
            onClick={() => goToRecipe(recipe.id)}
            onDelete={() => deleteRecipe(recipe.id)}  
          />
        ))}
      </Box>
    </Paper>
  );
};

export default UserProfile;