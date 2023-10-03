import { Box, IconButton, Tooltip } from "@mui/material";
import { useState, useContext } from "react";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { blue, red, common, grey } from '@mui/material/colors';
import { transformImage } from "../../../utils/utils";
import { useShareWindow } from "../../../hooks/useShareWindow";
import { UserContext } from "../../../contexts/user.context";


const SearchResultsPolariod = ({ images, title, recipeId, onClick }) => {
    const { addRecipeToFavorites, removeRecipeFromFavorites } = useContext(UserContext);   

    const [handleShareClick, ShareWindowComponent] = useShareWindow({title:title});
    const [isFavorited, setIsFavorited] = useState(false);
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
                backgroundColor: 'white'
            }}
            onClick={onClick}
            >
            <Box
                sx={{
                position: 'relative',  // New container with relative positioning
                img: {
                    maxWidth: '100%',
                    height: 'auto'
                }
                }}
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
                        top: '30%',  
                        right: '-16px',
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
                    top: '95%',  
                    right: '-16px',
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
                
            </Box>
            
            <Box textAlign="center" mt={1} sx={{color:'black'}}>
                <b>{title}</b>
            </Box>
        </Box>
    )
}

export default SearchResultsPolariod;