import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import Carousel from "../../Carousel/recipes-carousel/recipes-carousel.component"


const Featured = ({recipes}) => {
    const backgroundColor="#c3bcfc"

    return(
        <Box pb={5}>
          <Typography variant="h3" gutterBottom ml={9} mb={4} mt={4} pt={1} sx={{ color: '#021428' }}> Featured Recipes</Typography>
          <Carousel recipes={recipes} backgroundColor={backgroundColor} />
          <Typography variant="h3" gutterBottom ml={9} mb={6} mt={4} pt={1} sx={{ color: '#021428' }}> Mexican Recipes</Typography>
          <Carousel recipes={recipes} backgroundColor={backgroundColor} />  
        </Box>
    )
}

export default Featured;