import { Box } from "@mui/material";

const RecipeShowcaseImagePolaroid = ({ image, title, onClick }) => {
    return (
        <Box 
            sx={{ 
            position: 'relative',
            padding: '10px', 
            borderRadius: '10px',
            backgroundColor: 'white', 
            img: {
                maxWidth: '100%',
                maxheight: 'auto'
            }
            }}
            onClick={onClick}
        >
            <img src={image} alt={title} style={{display: 'block'}} />
        </Box>  
    );
}

export default RecipeShowcaseImagePolaroid;