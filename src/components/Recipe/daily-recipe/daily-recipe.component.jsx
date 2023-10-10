import { Box } from "@mui/material"
import { transformImage } from "../../../utils/utils"
import GeneralLoadingSpinner from "../../ui/loading-screens/general-loading-spinner.component"

const DailyRecipe = ({ recipe, date }) => {

    if (!recipe || !date ) {
        return <GeneralLoadingSpinner />
    }

    

    const imageUrl = transformImage(recipe.imageUrls[0], 300, 400)
    
    return (
        <Box>
            <img src={imageUrl} alt={recipe.title} />
            <h2> {recipe.title} </h2>
            <h3> {date}</h3>
        </Box>
    )
}

export default DailyRecipe;

