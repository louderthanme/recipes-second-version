// Import necessary hooks and context
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { RecipesContext } from "../../contexts/recipe.context";	
import { Paper, Grid} from "@mui/material"; // Material UI components
import { useNavigate } from "react-router-dom"; // Hook for navigation
import {StyledDivider} from "../../utils/styledComponents" // Styled component
import UserProfileLoading from "../../components/ui/loading-screens/user-profile-loading.component"; // Loading component

// Importing user related components
import UserProfileInformation from "../../components/User/user-profile-information/user-profile-information.component";
import UserRecipesDisplay from "../../components/User/user-recipes-display/user-recipes-display.component";
import UserProfileControls from "../../components/User/user-profile-controls/user-profile-controls.component";

// Main component
const UserProfile = () => {
  // Contexts
  const { userRecipes, fetchUserRecipes, deleteRecipe, setUserRecipes, fetchFavoriteRecipes, favoriteFullRecipes,  } = useContext(RecipesContext);
  const { user, favoriteRecipes, removeRecipeFromFavorites } = useContext(UserContext);
  const userId = user ? user.uid : null;
  const navigate = useNavigate();
 
  // State
  const [isToggled, setIsToggled] = useState(false);
  const [activeTab, setActiveTab] = useState('myRecipes');

  // Handlers
  const handleToggle = () => {  
    setIsToggled(!isToggled);
  };
  const handleTabChange = (selectedTab) => {
    setActiveTab(selectedTab);
  }
  const handleRemoveFromFavorites = async (recipeId) => {
    await removeRecipeFromFavorites(recipeId);
  }

  // Fetch user recipes on user id change
  useEffect(() => {
    if (userId) {
      fetchUserRecipes(userId);
    }
  }, [userId]);

  // Fetch favorite recipes on favorite recipes change
  useEffect(() => {
    if (favoriteRecipes) {
      fetchFavoriteRecipes(favoriteRecipes);
    }
  }, [favoriteRecipes]);

  // Delete recipe handler
  const handleDeleteRecipe = async (recipe) => {
    try {
      await deleteRecipe(recipe);
      setUserRecipes((prevUserRecipes) => prevUserRecipes.filter((r) => r.id !== recipe.id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  // Navigation handlers
  const goToRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };
  const goToRecipeEdit = (id) => {
    navigate(`/recipe/${id}/edit`);
  }
  const goToRecipeUpload = () => {
    navigate("/recipe/upload");
  };
  
  // Loading state
  if (userRecipes === null) {
    return <UserProfileLoading />;
  }

  // Determine which recipes to display
  let displayRecipes, displayType;
  if (activeTab === 'myRecipes') {
    displayRecipes = userRecipes;
    displayType = 'own';
  } else {
    displayRecipes = favoriteFullRecipes;
    displayType = 'favorite';
  }

  // Render
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={12} md={12} lg={11}>
        <Paper 
        elevation={10} 
        sx={{
          backgroundColor: '#fdebd7',
          width: '80%',
          padding: '10px',
          marginBottom: '30px',
          position: 'relative',
          mx: 'auto',
          '@media (max-width:960px)': {
            mx: '0', // Remove margins on smaller screens
            width: '100%',
          },
        }}>
          <UserProfileInformation user={user} goToRecipeUpload={goToRecipeUpload} />
          <StyledDivider />
          <UserProfileControls
              handleToggle={handleToggle}
              activeTab={activeTab}
              handleTabChange={handleTabChange}
          />
          <UserRecipesDisplay
            userRecipes={displayRecipes}
            onDeleteRecipe={handleDeleteRecipe}
            onClickRecipe={goToRecipe}
            onEditRecipe={goToRecipeEdit}
            onRemoveFromFavorites={handleRemoveFromFavorites}
            isToggled={isToggled}
            type={displayType}
            goToRecipeUpload={goToRecipeUpload}
            goToRecipe={goToRecipe}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
//This file defines a `UserProfile` component that displays a user's profile information, their own recipes, and their favorite recipes. It uses context to fetch and manage the user's recipes and favorite recipes. It also provides controls for toggling between the user's own recipes and their favorite recipes, and for deleting recipes.