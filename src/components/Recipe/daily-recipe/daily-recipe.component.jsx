// Importing required components from MUI and icons
import { Box, Paper, Grid, Typography, Tooltip, IconButton } from "@mui/material";
import { grey, red, common } from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Importing hooks from React
import { useState, useEffect, useContext } from "react";

// Import utility functions and styled components
import { transformImages } from "../../../utils/utils";
import { StyledDivider } from "../../../utils/styledComponents";
import GeneralLoadingSpinner from "../../ui/loading-screens/general-loading-spinner.component";

// Import custom hooks and context
import { useShareWindow } from '../../../hooks/useShareWindow';
import { UserContext } from "../../../contexts/user.context";

// Import child components
import ImageBox from '../image-box/image-box.component';
import RecipeDetailsWrapper from '../details-box/recipe-details-wrapper/recipe-details-wrapper.component';

// The DailyRecipe component definition
const DailyRecipe = ({ recipe, date }) => {
    // Using context to get user-related data and functions
    const { addRecipeToFavorites, removeRecipeFromFavorites, favoriteRecipes, user } = useContext(UserContext);

    // State for tracking if the current recipe is favorited
    const [isFavorited, setIsFavorited] = useState(false);
    // State for holding the current recipe ID
    const [currentId, setCurrentId] = useState(null);

    // Effect hook to set current ID when recipe changes
    useEffect(() => {
        if (recipe && recipe.id) {
            setCurrentId(recipe.id);
        }
    }, [recipe]);

    // Custom hook for sharing functionality
    const [handleShareClick, ShareWindowComponent] = useShareWindow({ title: recipe?.title, recipeId: currentId });

    // Effect hook to update favorited state when the favoriteRecipes or currentId changes
    useEffect(() => {
        setIsFavorited(favoriteRecipes.includes(currentId));
    }, [favoriteRecipes, currentId]);

    // Function to toggle the favorite status of the recipe
    const toggleFavorite = async (e) => {
        e.stopPropagation();
        if (isFavorited) {
            await removeRecipeFromFavorites(currentId);
        } else {
            await addRecipeToFavorites(currentId);
        }
        setIsFavorited(!isFavorited);
    };

    // Return a loading spinner if the recipe or date is not available
    if (!recipe || !date) {
        return <GeneralLoadingSpinner />;
    }

    // Destructuring recipe details for easier access
    const { title, tags } = recipe;
    // Transforming image URLs for optimal dimensions
    const imageUrls = transformImages(recipe.imageUrls, 300, 400);

    // Render the main component
    return (
        <Paper 
        elevation={4} 
        sx={{ 
            width: '86%', 
            mx: 'auto',
            backgroundColor: 
            '#bcfcbd', 
            position: 'relative',
            mx: 'auto',
            '@media (max-width:960px)': {
                mx: '0',
                padding:'0', 
                width: '100%',
            }            
            }}>
            {/* Tooltip and IconButton for favorite functionality */}
            <Tooltip title={user ? (isFavorited ? "Remove from Favorites" : "Add to Favorites") : "Login in to add to favorites"}>
                <IconButton
                    aria-label="toggle-favorite"
                    size="small"
                    onClick={toggleFavorite}
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: grey[500],
                        '&:hover': {
                            backgroundColor: isFavorited ? red[700] : grey[700],
                        },
                    }}
                >
                    {isFavorited ? 
                        <FavoriteIcon sx={{ color: red[500], fontSize: '24px' }} />
                        :
                        <FavoriteBorderIcon sx={{ color: common.white, fontSize: '24px' }} />
                    }
                </IconButton>
            </Tooltip>
            <Box m={5} p={1}>
                <Grid container spacing={2}>
                    {/* Typography for the date */}
                    <Grid item xs={12} mt={3}>
                        <Typography variant='h4' sx={{ textAlign: 'center', fontFamily: 'Caveat', fontWeight: 900, color: '#750303' }}>
                            Recipe for {date}
                        </Typography>
                        <StyledDivider />
                    </Grid>

                    {/* Container for ImageBox and RecipeDetailsWrapper components */}
                    <Grid item xs={12} sx={{ margin: '10px' }}>
                        <Grid container spacing={2}>
                            {/* Image display component */}
                            <Grid item xs={12} xl={5}>
                                <ImageBox images={imageUrls} />
                            </Grid>

                            {/* Details display component */}
                            <Grid item xs={12} xl={7}>
                                <RecipeDetailsWrapper title={title} tags={tags} handleShareClick={handleShareClick} ShareWindowComponent={ShareWindowComponent} id={currentId} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

// Export the DailyRecipe component
export default DailyRecipe;
