import { useState } from "react";
import { Box, IconButton} from "@mui/material";
import { blue, common } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ShareWindowPortal from "../../ui/share-window-portal/share-window-portal.component";
import ShareWindow from "../../ui/share-window/share-window.component";

const RecipesCarouselPolaroid = ({ image, title, onClick }) => {
  const [showShareWindow, setShowShareWindow] = useState(false);

  const handleShareClick = (e) => {
    e.stopPropagation();  
    const rect = e.currentTarget.getBoundingClientRect(); // change from e.target to e.currentTarget
    const x = rect.left;
    const y = rect.top;
    setShowShareWindow({ show: !showShareWindow.show, x, y });
  };
  

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
      {showShareWindow.show && (
        <ShareWindowPortal x={showShareWindow.x} y={showShareWindow.y}>
          <ShareWindow onClose={()=> setShowShareWindow({show:false})}/>
        </ShareWindowPortal>
      )}
    </Box>
  );
};

export default RecipesCarouselPolaroid;