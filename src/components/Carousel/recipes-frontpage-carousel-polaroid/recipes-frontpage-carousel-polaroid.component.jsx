import React, { useState, useContext, useEffect } from 'react';
import { Box, IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { blue, red, common, grey } from '@mui/material/colors';import ShareIcon from '@mui/icons-material/Share';
import { useShareWindow } from "../../../hooks/useShareWindow";
import { UserContext } from "../../../contexts/user.context"

const RecipesFrontpageCarouselPolaroid = ({ image, title, recipeId, onClick }) => {

  const { addRecipeToFavorites, removeRecipeFromFavorites, favoriteRecipes } = useContext(UserContext);   

  const [handleShareClick, ShareWindowComponent] = useShareWindow({title:title});
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
      setIsFavorited(favoriteRecipes.includes(recipeId));
  }, [favoriteRecipes, recipeId]);



  const toggleFavorite = async (e, recipeId) => {
    if (isFavorited) {
      await removeRecipeFromFavorites(recipeId);
    } else {
      await addRecipeToFavorites(recipeId);
    }
    setIsFavorited(!isFavorited);
  };
 

  return (
    <Box 
      sx={{ 
        position: 'relative',
        padding: '10px', 
        borderRadius: '10px',
        marginX: '2px',
        backgroundColor: 'white', 
        img: {
          maxWidth: '100%',
          maxheight: 'auto'
        }
      }}
      onClick={onClick}
    >
      <img src={image} alt={title} style={{display: 'block'}} />
      <Tooltip title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}>
        <IconButton
          aria-label="toggle-favorite"
          size="small"
          onClick={(e)=>{
            e.stopPropagation();
            toggleFavorite(e, recipeId);
          }}
          sx={{
            position: 'absolute',
            top: '30%',  
            right: '-10px',
            width: '24px',
            height: '24px',
            backgroundColor: grey[500],  // Set to grey[500] for a specific shade of grey
            '&:hover': {
              backgroundColor: isFavorited ? red[700] : grey[700], // Modify hover color for consistency
            },
          }}
        >
          {isFavorited ? 
            <FavoriteIcon sx={{ color: red[500], fontSize: '14px' }} /> // red heart when favorited
            :
            <FavoriteBorderIcon sx={{ color: common.white, fontSize: '14px' }} /> // white border heart when not favorited
          }
        </IconButton>
      </Tooltip>
      <IconButton
        aria-label="share-recipe"
        size="small"
        onClick={handleShareClick}
        sx={{
          position: 'absolute',
          top: '70%',  
          right: '-10px',
          width: '24px',
          height: '24px',
          backgroundColor: blue[500],
          '&:hover': {
            backgroundColor: blue[700],
          },
        }}
      >
        <ShareIcon sx={{ color: common.white, fontSize: '14px' }} />
      </IconButton>
      {ShareWindowComponent()}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          minHeight: '4em', 
          justifyContent: 'center', 
          textAlign: 'center' 
        }} 
        className="recipe-title"
      >
        <b>{title}</b>
      </Box>
    </Box>
  );
};

export default RecipesFrontpageCarouselPolaroid;
