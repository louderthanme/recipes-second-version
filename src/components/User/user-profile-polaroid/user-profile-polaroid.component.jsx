import { Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import { red, green, blue, common } from '@mui/material/colors';
import { transformImage } from "../../../utils/utils";

const UserProfilePolaroid = ({ images, title, onClick, onDelete, onEdit, id, user, ownerUid, isToggled }) => {
  const transformedImage = transformImage(images[1], 300, 400);


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
        
        { isToggled && user?.uid === ownerUid &&
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
      { isToggled && user?.uid === ownerUid &&
          <IconButton
            aria-label="edit-recipe"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(id);
            }}
            size="small"
            sx={{
              position: 'absolute',
              top: '45%',  // Now relative to the new container
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
            size="small"
            sx={{
              position: 'absolute',
              top: '95%',  // Now relative to the new container
              right: '-16px',
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
        
      </Box>
      
      <Box textAlign="center" mt={1}>
        <b>{title}</b>
      </Box>
    </Box>
  );
};

export default UserProfilePolaroid;
