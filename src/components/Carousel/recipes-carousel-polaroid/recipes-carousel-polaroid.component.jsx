import { Box, IconButton} from "@mui/material";
import { blue, common } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import { useShareWindow } from "../../../hooks/useShareWindow";

const RecipesCarouselPolaroid = ({ image, title, onClick }) => {

  const [handleShareClick, ShareWindowComponent] = useShareWindow();

  

  return(
    <Box 
      sx={{ 
        position: 'relative',
        padding: '10px', 
        borderRadius: '10px',
        marginX: '2px',
        backgroundColor: 'white', 
        img: {
          maxWidth: '100%',
          maxheight: 'auto'
        }
      }}
      onClick={onClick}
    >
      <img src={image} alt={title} style={{display: 'block'}} />
      <IconButton
              aria-label="share-recipe"
              size="small"
              onClick={handleShareClick}
              sx={{
                position: 'absolute',
                top: '70%',  
                right: '-10px',
                width: '24px',
                height: '24px',
                backgroundColor: blue[500],
                '&:hover': {
                  backgroundColor: blue[700],
                },
              }}
            >
            <ShareIcon sx={{ color: common.white, fontSize: '14px' }} />
            </IconButton>
            {ShareWindowComponent()}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          minHeight: '4em', 
          justifyContent: 'center', 
          textAlign: 'center' 
        }} 
        className="recipe-title"
      >
        <b>{title}</b>
      </Box>

    </Box>
  );
};

export default RecipesCarouselPolaroid;