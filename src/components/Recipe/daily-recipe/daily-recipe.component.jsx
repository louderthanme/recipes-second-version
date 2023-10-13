import { Box, Paper, Grid, Typography, Tooltip, IconButton} from "@mui/material"
import { grey, red, common } from "@mui/material/colors"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect, useContext } from "react"
import { transformImages } from "../../../utils/utils"
import GeneralLoadingSpinner from "../../ui/loading-screens/general-loading-spinner.component"
import { useShareWindow } from '../../../hooks/useShareWindow'
import { StyledDivider } from "../../../utils/styledComponents"

import ImageBox from '../image-box/image-box.component'
import RecipeDetailsWrapper from '../details-box/recipe-details-wrapper/recipe-details-wrapper.component'
import { UserContext } from "../../../contexts/user.context"

const DailyRecipe = ({ recipe, date }) => {
    const { addRecipeToFavorites, removeRecipeFromFavorites, favoriteRecipes } = useContext(UserContext);

    const [isFavorited, setIsFavorited] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        if (recipe && recipe.id) {
            setCurrentId(recipe.id);
        }
    }, [recipe]);

    const [handleShareClick, ShareWindowComponent] = useShareWindow({ title: recipe?.title, recipeId: currentId });

    useEffect(() => {
        setIsFavorited(favoriteRecipes.includes(currentId));
    }, [favoriteRecipes, currentId]);

    const toggleFavorite = async (e) => {
        e.stopPropagation();
        if (isFavorited) {
            await removeRecipeFromFavorites(currentId);
        } else {
            await addRecipeToFavorites(currentId);
        }
        setIsFavorited(!isFavorited);
    };

    if (!recipe || !date) {
        return <GeneralLoadingSpinner />
    }

    const { title, tags } = recipe;
    const imageUrls = transformImages(recipe.imageUrls, 300, 400);

    return (
        <Paper elevation={4} sx={{ width: '86%', mx: 'auto', backgroundColor: '#bcfcbd', position: 'relative' }}>
            <Tooltip title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}>
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
                    {/* Date row */}
                    <Grid item xs={12} mt={3}>
                        <Typography variant='h4' sx={{ textAlign: 'center', fontFamily: 'Caveat', fontWeight:900, color: '#750303' }}>Recipe for {date}</Typography>
                        <StyledDivider />
                    </Grid>

                    {/* Wrapper for ImageBox and RecipeDetailsWrapper */}
                    <Grid item xs={12} sx={{ margin: '10px' }}>
                        <Grid container spacing={2}>
                            {/* ImageBox */}
                            <Grid item xs={12} xl={5}>
                                <ImageBox images={imageUrls} />
                            </Grid>

                            {/* RecipeDetailsWrapper */}
                            <Grid item xs={12} xl={7}>
                                <RecipeDetailsWrapper title={title} tags={tags} handleShareClick={handleShareClick} ShareWindowComponent={ShareWindowComponent} id={currentId} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}

export default DailyRecipe;
