import { useContext, useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import UserProfilePolaroid from "../user-profile-polaroid/user-profile-polaroid.component";

import SearchBarBox from "../../Home/search-bar/search-bar-box.component"
import SearchResults from "../../Home/search-results/search-results.component"
import { RecipesContext } from "../../../contexts/recipe.context";

const UserRecipesDisplay = ({ userRecipes, onDeleteRecipe, onClickRecipe, onEditRecipe, isToggled, onRemoveFromFavorites, type, goToRecipeUpload, goToRecipe  }) => {

  const { searchRecipes, searchResults } = useContext(RecipesContext);

  const [isSearching, setIsSearching] = useState(false);


  const handleChange = (e) => {
    const query = e.target.value;

    if (query.length > 0) {
      setIsSearching(true);
      searchRecipes(query);
    } else {  
      setIsSearching(false);
    }
  };



  return (
    <>
      {userRecipes?.length === 0 && type === "own" ? (
        <Box p={5} sx={{ textAlign: 'center' }}>
          <Box m={2} sx={{ fontSize: '20px' }}>
            No recipes to display
          </Box>
          <Box m={2}>
            <Button variant="contained" color="secondary" onClick={goToRecipeUpload}>
              Upload your first recipe!
            </Button>
          </Box>
        </Box>
      ) : userRecipes?.length > 0 && type === "own" ? (
        <Box p={3}>
          <Grid container spacing={3}>
            {userRecipes.map((recipe, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>
                <UserProfilePolaroid
                  images={recipe.imageUrls}
                  title={recipe.title}
                  isToggled={isToggled}
                  onDelete={() => onDeleteRecipe(recipe)}
                  onClick={() => onClickRecipe(recipe.id)}
                  onEdit={() => onEditRecipe(recipe.id)}
                  onRemove={() => onRemoveFromFavorites(recipe.id)}
                  type={type}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )  : type === "favorite" ? (
        <Box p={5} sx={{ textAlign: 'center' }}>
          {userRecipes?.length === 0 ? (
            <>
              <Box m={2} sx={{ fontSize: '20px' }}>
                Discover your new favorite recipe!
              </Box>
              <SearchBarBox handleChange={handleChange}/>
            </>
          ) : (
            <>
              <Box p={3}>
                <Grid container spacing={3}>
                  {userRecipes.map((recipe, index) => (
                <Grid item xs={12} sm={6} lg={3} key={index} sx={{margin:'auto'}}>  
                      <UserProfilePolaroid
                        images={recipe.imageUrls}
                        title={recipe.title}
                        isToggled={isToggled}
                        onDelete={() => onDeleteRecipe(recipe)}
                        onClick={() => onClickRecipe(recipe.id)}
                        onEdit={() => onEditRecipe(recipe.id)}
                        onRemove={() => onRemoveFromFavorites(recipe.id)}
                        type={type}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <SearchBarBox handleChange={handleChange}/>
            </>
          )}
          {isSearching && (
            <Box>
              <SearchResults 
                  searchResults={searchResults}
                  onClickRecipe={goToRecipe}
              />
            </Box>
          )}
        </Box>
      ) : null
      }
    </>
  );
};

export default UserRecipesDisplay;