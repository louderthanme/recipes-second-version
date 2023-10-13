import React, { useState, useContext, useEffect } from 'react';
import useTheme from '@mui/material/styles/useTheme';
import { Box, IconButton, Tooltip, Skeleton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { blue, red, common, grey } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import { useShareWindow } from "../../../hooks/useShareWindow";
import { UserContext } from "../../../contexts/user.context"

const RecipesFrontpageCarouselPolaroid = ({ image, title, recipeId, onClick }) => {
  const theme = useTheme();
  const { addRecipeToFavorites, removeRecipeFromFavorites, favoriteRecipes } = useContext(UserContext);   

  const [handleShareClick, ShareWindowComponent] = useShareWindow({title:title, recipeId:recipeId});
  const [isFavorited, setIsFavorited] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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
      marginX: theme.breakpoints.values.sm ? '30px' : '5px',
      marginY: '10px',
      backgroundColor: 'white'
    }}
    onClick={onClick}
  >
    <img 
      src={image} 
      alt={title} 
      onLoad={() => setImageLoaded(true)} 
      style={{width: '100%', height: 'auto', display: imageLoaded ? 'block' : 'none'}}
    />

    {!imageLoaded && 
      <Box 
        sx={{ 
          position: 'relative',
          width: '100%',
          paddingBottom: '72%'
        }}
      >
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="100%" 
          style={{position: 'absolute', top: 0, left: 0}} 
        />
      </Box>
    }

      <Tooltip title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}>
        <IconButton
          aria-label="toggle-favorite"
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(e, recipeId);
          }}
          sx={{
            position: 'absolute',
            top: '82%',  
            right: '-10px',
            width: '24px',
            height: '24px',
            backgroundColor: grey[500],
            '&:hover': {
              backgroundColor: isFavorited ? red[700] : grey[700],
            },
          }}
        >
          {isFavorited ? 
            <FavoriteIcon sx={{ color: red[500], fontSize: '14px' }} />
            :
            <FavoriteBorderIcon sx={{ color: common.white, fontSize: '14px' }} />
          }
        </IconButton>
      </Tooltip>
      
      <Tooltip title="Share">
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
      </Tooltip>
      
      {ShareWindowComponent()}
      
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          minHeight: '4em', 
          fontSize: '20px',
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
