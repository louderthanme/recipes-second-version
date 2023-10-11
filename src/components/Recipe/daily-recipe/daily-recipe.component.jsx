import { Box, Paper, Grid, Typography} from "@mui/material"
import { transformImages } from "../../../utils/utils"
import GeneralLoadingSpinner from "../../ui/loading-screens/general-loading-spinner.component"
import { useNavigate } from "react-router-dom/dist"
import { useShareWindow } from '../../../hooks/useShareWindow'


import ImageBox from '../image-box/image-box.component'
import RecipeDetailsWrapper from '../details-box/recipe-details-wrapper/recipe-details-wrapper.component'

const DailyRecipe = ({ recipe, date }) => {

    if (!recipe || !date ) {
        return <GeneralLoadingSpinner />
    }

    const { title, tags, id } = recipe

    const navigate = useNavigate();

    const [handleShareClick, ShareWindowComponent] = useShareWindow({ title: title, recipeId: id });
    
    const goToRecipe = () => {
      navigate(`/recipe/${id}`);
    }
  

    

    const imageUrls = transformImages(recipe.imageUrls, 300, 400)
    
    return (

        <Paper elevation={4} sx={{ width: '86%', mx: 'auto', backgroundColor: '#bcfcbd' }}>
            <Box m={5} p={1}>
                <Grid container spacing={2}>
                    {/* Date row */}
                    <Grid item xs={12} mt={1}>
                        <Typography variant='h4' sx={{ textAlign: 'center', fontFamily: 'caveat' }}>{date}</Typography>
                    </Grid>

                    {/* ImageBox */}
                    <Grid item sm={12} lg={6}>
                        <ImageBox images={imageUrls} />
                    </Grid>

                    {/* RecipeDetailsWrapper */}
                    <Grid item sm={12} lg={6}>
                        <RecipeDetailsWrapper title={title} tags={tags} handleShareClick={handleShareClick} ShareWindowComponent={ShareWindowComponent} goToRecipe={goToRecipe} />
                    </Grid>
                </Grid>
            </Box>
        </Paper>

    )
}

export default DailyRecipe;

