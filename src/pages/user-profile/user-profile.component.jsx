import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { RecipesContext } from "../../contexts/recipe.context";	
import { Paper, Box} from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserRecipesDisplay from "../../components/user-recipes-display/user-recipes-display.component";

const UserProfile = () => {
  const { userRecipes, fetchUserRecipes, deleteRecipe, setUserRecipes } = useContext(RecipesContext); // Use userRecipes
  const { user } = useContext(UserContext);
  const userId = user ? user.uid : null;
  const navigate = useNavigate();


  useEffect(() => {
    if (userId) {
      fetchUserRecipes(userId);
    }
  }, [userId]);

  const handleDeleteRecipe = async (recipe) => {
    console.log('recipeId:', recipe.id);
    try {
      await deleteRecipe(recipe);
      setUserRecipes((prevUserRecipes) => prevUserRecipes.filter((r) => r.id !== recipe.id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const goToRecipe = (id) => {
    console.log('id:', id)
    navigate(`/recipe/${id}`);
  };

  const goToRecipeEdit = (id) => {
    navigate(`/recipe/${id}/edit`);
  }
  

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
        onDeleteRecipe={handleDeleteRecipe} 
        onClickRecipe={goToRecipe}
        onEditRecipe={goToRecipeEdit}
      />
    </Paper>
  );
};

export default UserProfile;