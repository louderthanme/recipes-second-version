import { Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { red, green, common } from '@mui/material/colors';
import { transformImage } from "../../utils/utils";

const UserProfilePolaroid = ({ image, title, onClick, onDelete, onEdit, id, user, ownerUid }) => {
  const transformedImage = transformImage(image, 300, 400);


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
        
        { user?.uid === ownerUid &&
          <IconButton
            aria-label="edit-recipe"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(id);
            }}
            size="small"
            sx={{
              position: 'absolute',
              top: '50%',  // Now relative to the new container
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
      </Box>
      
      <Box textAlign="center" mt={1}>
        <b>{title}</b>
      </Box>
    </Box>
  );
};

export default UserProfilePolaroid;
