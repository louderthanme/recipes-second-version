import { Box, Grid} from "@mui/material";
import SearchResultsPolariod from "../search-results-polaroid/search-results-polaroid.component";

const SearchResults = ({searchResults, onClickRecipe}) => {

    return (
        <Box p={3} m={2}>
            <Grid container spacing={3}>
                {searchResults.map((recipe, index) => (
                    <Grid item  sm={12} md={6} lg={3} key={index}>
                        <SearchResultsPolariod
                            images={recipe.imageUrls}
                            title={recipe.title}\
                            recipeId={recipe.id}
                            onClick={() => onClickRecipe(recipe.id)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default SearchResults;