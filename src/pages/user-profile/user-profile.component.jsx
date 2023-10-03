import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { RecipesContext } from "../../contexts/recipe.context";	
import { Paper} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {StyledDivider} from "../../utils/styledComponents"
import UserProfileLoading from "../../components/ui/loading-screens/user-profile-loading.component";

import UserProfileInformation from "../../components/User/user-profile-information/user-profile-information.component";
import UserRecipesDisplay from "../../components/User/user-recipes-display/user-recipes-display.component";
import UserProfileControls from "../../components/User/user-profile-controls/user-profile-controls.component";

const UserProfile = () => {
  const { userRecipes, fetchUserRecipes, deleteRecipe, setUserRecipes, fetchFavoriteRecipes, favoriteFullRecipes } = useContext(RecipesContext); // Use userRecipes
  const { user, favoriteRecipes, removeRecipeFromFavorites } = useContext(UserContext);
  const userId = user ? user.uid : null;
  const navigate = useNavigate();

  console.log('userRecipes:', userRecipes)
  
  const [isToggled, setIsToggled] = useState(false);
  const [activeTab, setActiveTab] = useState('myRecipes');

  const handleToggle = () => {  
    setIsToggled(!isToggled);
  };

  const handleTabChange = (selectedTab) => {
    setActiveTab(selectedTab);
  }

  const handleRemoveFromFavorites = async (recipeId) => {
    await removeRecipeFromFavorites(recipeId);
  }



  useEffect(() => {
    if (userId) {
      fetchUserRecipes(userId);
    }
  }, [userId]);

  useEffect(() => {
    if (favoriteRecipes) {
      fetchFavoriteRecipes(favoriteRecipes);
    }
  }, [favoriteRecipes]);

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
    return <UserProfileLoading />;
  }

  let displayRecipes, displayType;

  if (activeTab === 'myRecipes') {
    displayRecipes = userRecipes;
    displayType = 'own';
  } else {
    displayRecipes = favoriteFullRecipes;
    displayType = 'favorite';
  }

  return (
    <Paper elevation={10} sx={{ backgroundColor: "#fdebd7",  margin:'20px', width:'70%'}}>
      <UserProfileInformation user={user} />
      <StyledDivider />
       <UserProfileControls
          handleToggle={handleToggle}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
       />
      <StyledDivider />

      <UserRecipesDisplay
        userRecipes={displayRecipes}
        onDeleteRecipe={handleDeleteRecipe}
        onClickRecipe={goToRecipe}
        onEditRecipe={goToRecipeEdit}
        onRemoveFromFavorites={handleRemoveFromFavorites}
        isToggled={isToggled}
        type={displayType}
      />

      


    </Paper>
  );
};

export default UserProfile;