import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import RecipesFrontpageCarousel from "../../Carousel/recipes-frontpage-carousel/recipes-frontpage-carousel.component"

const Featured = ({recipes}) => {
    const backgroundColor="#c3bcfc"

    return(
        <Box pb={5}>
          <Typography variant="h3" gutterBottom ml={7} mb={4} mt={4} pt={1} sx={{ color: '#021428', fontFamily:'caveat', fontWeight:'800' }}> Featured Recipes</Typography>
          <RecipesFrontpageCarousel recipes={recipes} backgroundColor={backgroundColor} />
          <Typography variant="h3" gutterBottom ml={7} mb={6} mt={4} pt={1} sx={{ color: '#021428', fontFamily:'caveat', fontWeight:'800' }}> Mexican Recipes</Typography>
          <RecipesFrontpageCarousel recipes={recipes} backgroundColor={backgroundColor} />  
        </Box>
    )
}

export default Featured;