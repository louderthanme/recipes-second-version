import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import Carousel from "../../Carousel/recipes-carousel/recipes-carousel.component"


const Featured = ({recipes}) => {
    const backgroundColor="#66101F"

    return(
        <Box pb={5}>
          <Typography variant="h2" gutterBottom ml={9} mb={6} mt={4} pt={4} sx={{ color: '#517664' }}> Featured Recipes</Typography>
          <Carousel recipes={recipes} backgroundColor={backgroundColor} />
          <Typography variant="h2" gutterBottom ml={9} mb={6} mt={4} pt={4} sx={{ color: '#a17c6b' }}> Mexican Recipes</Typography>
          <Carousel recipes={recipes} backgroundColor={backgroundColor} />  
        </Box>
    )
}

export default Featured;