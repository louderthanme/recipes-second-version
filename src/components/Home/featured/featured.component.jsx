import { Box, Typography} from "@mui/material"
import RecipesFrontpageCarousel from "../../Carousel/recipes-frontpage-carousel/recipes-frontpage-carousel.component"
import DailyRecipe from "../../Recipe/daily-recipe/daily-recipe.component"
import useDailyRecipeSelector from "../../../utils/dailyRecipeSelector"


const Featured = ({recipes}) => {
    const backgroundColor="#c3bcfc"

    const {selectedRecipe, currentDateString} = useDailyRecipeSelector(recipes)

    return(
        <Box pb={5}>
          <DailyRecipe recipe={selectedRecipe} date={currentDateString} />
          <Typography variant="h3" gutterBottom ml={7} my={8} pt={1} sx={{ color: '#021428', fontFamily:'Architects Daughter', fontWeight:'800', textAlign:'center' }}> Featured Recipes</Typography>
          <RecipesFrontpageCarousel recipes={recipes} backgroundColor={backgroundColor} />
        </Box>
    )
}

export default Featured;