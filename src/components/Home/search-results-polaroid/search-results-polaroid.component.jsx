import { Box, IconButton, Tooltip } from "@mui/material";
import { useState, useContext,useEffect } from "react";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { blue, red, common, grey } from '@mui/material/colors';
import { transformImage } from "../../../utils/utils";
import { useShareWindow } from "../../../hooks/useShareWindow";
import { UserContext } from "../../../contexts/user.context";


const SearchResultsPolaroid = ({ images, title, recipeId, onClick }) => {
    const { addRecipeToFavorites, removeRecipeFromFavorites, favoriteRecipes } = useContext(UserContext);   

    const [handleShareClick, ShareWindowComponent] = useShareWindow({title:title, recipeId:recipeId});
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
    

    const transformedImage = transformImage(images[1], 300, 400);

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
                <img src={transformedImage} alt={title} style={{ display: 'block' }} />
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
                        top: '82%',  
                        right: '-10px',
                        width: '24px',
                        height: '24px',
                        marginY: '2px',
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
                        top: '70%',  // adjusted position
                        right: '-10px',  // adjusted from '-16px'
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
            
            
            <Box textAlign="center" mt={1} sx={{color:'black'}}>
                <b>{title}</b>
            </Box>
        </Box>
    )
}

export default SearchResultsPolaroid;