import { Box, Paper, Grid, Typography} from "@mui/material"
import { transformImages } from "../../../utils/utils"
import GeneralLoadingSpinner from "../../ui/loading-screens/general-loading-spinner.component"
import { useShareWindow } from '../../../hooks/useShareWindow'
import { StyledDivider } from "../../../utils/styledComponents"


import ImageBox from '../image-box/image-box.component'
import RecipeDetailsWrapper from '../details-box/recipe-details-wrapper/recipe-details-wrapper.component'

const DailyRecipe = ({ recipe, date }) => {
    

    if (!recipe || !date ) {
        return <GeneralLoadingSpinner />
    }

    const { title, tags, id } = recipe


    const [handleShareClick, ShareWindowComponent] = useShareWindow({ title: title, recipeId: id });
    
    

    const imageUrls = transformImages(recipe.imageUrls, 300, 400)
    return (
        <Paper elevation={4} sx={{ width: '86%', mx: 'auto', backgroundColor: '#bcfcbd' }}>
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
                                <RecipeDetailsWrapper title={title} tags={tags} handleShareClick={handleShareClick} ShareWindowComponent={ShareWindowComponent} id={id} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}

export default DailyRecipe;





