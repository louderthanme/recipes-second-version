import { Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import RemoveIcon from '@mui/icons-material/Remove';
import { red, green, blue, common } from '@mui/material/colors';
import { transformImage } from "../../../utils/utils";
import ShareWindow from "../../ui/share-window/share-window.component";
import { useShareWindow } from "../../../hooks/useShareWindow";

const UserProfilePolaroid = ({ images, title, onClick, onDelete, onEdit, onRemove, id, user, ownerUid, isToggled, type}) => {
  
  const transformedImage = transformImage(images[0], 300, 400);
  const [handleShareClick, ShareWindowComponent] = useShareWindow({title:title});


  return (
    <Box
      sx={{
        position: 'relative',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'white'
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          position: 'relative',  // New container with relative positioning
          img: {
            maxWidth: '100%',
            height: 'auto'
          }
        }}
      >
        <img src={transformedImage} alt={title} style={{ display: 'block' }} />


      { isToggled && type === "own" && user?.uid === ownerUid &&
        <IconButton
          aria-label="delete-recipe"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          size="small"
          sx={{
            position: 'absolute',
            top: '-16px',
            right: '-16px',
            width: '24px',
            height: '24px',
            backgroundColor: red[500],
            '&:hover': {
              backgroundColor: red[700],
            },
          }}
        >
          <CloseIcon sx={{ color: common.white, fontSize:'22px' }} />
        </IconButton>
      }
      
      { isToggled && type === "favorite" && user?.uid === ownerUid &&
        <IconButton
          aria-label="remove-recipe-from-favorites"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          size="small"
          sx={{
            position: 'absolute',
            top: '-16px',
            right: '-16px',
            width: '24px',
            height: '24px',
            backgroundColor: red[500],
            '&:hover': {
              backgroundColor: red[700],
            },
          }}
        >
          <RemoveIcon sx={{ color: common.white, fontSize:'22px' }} />
        </IconButton>
      }


      { isToggled && type === "own" && user?.uid === ownerUid &&
          <IconButton
            aria-label="edit-recipe"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(id);
            }}
            size="small"
            sx={{
              position: 'absolute',
              top: '45%',  
              right: '-16px',
              width: '24px',
              height: '24px',
              backgroundColor: green[500],
              '&:hover': {
                backgroundColor: green[700],
              },
            }}
          >
          <EditIcon sx={{ color: common.white, fontSize: '14px' }} />
          </IconButton>
        }
      <IconButton
        aria-label="share-recipe"
        onClick={handleShareClick}
        size="small"
        sx={{
          position: 'absolute',
          top: '95%',  
          right: '-16px',
          width: '24px',
          height: '24px',
          backgroundColor: blue[500],
          '&:hover': {
            backgroundColor: blue[700],
          }
        }}
      >
        <ShareIcon sx={{ color: common.white, fontSize: '14px' }} />
      </IconButton>
      {ShareWindowComponent()}
        
      </Box>
      
      <Box textAlign="center" mt={1}>
        <b>{title}</b>
      </Box>
    </Box>
  );
};

export default UserProfilePolaroid;
