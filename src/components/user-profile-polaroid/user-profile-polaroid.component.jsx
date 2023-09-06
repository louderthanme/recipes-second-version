import { Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { red, common } from '@mui/material/colors';
import { transformImage } from "../../utils/utils";

const UserProfilePolaroid = ({ image, title, onClick, onDelete }) => {
    const transformedImage = transformImage(image, 300);  // Transform the image here
    return (
        <Box 
            sx={{ 
            position: 'relative',
            padding: '10px', 
            borderRadius: '10px',
            backgroundColor: 'white', 
            img: {
                maxWidth: '100%',
                height: 'auto'
            }
            }}
            onClick={onClick}
        >
            <img src={image} alt={title} style={{display: 'block'}} />
            <Box textAlign="center" mt={1}>
            <b>{title}</b>
            </Box>
            <IconButton 
            aria-label="delete-recipe" 
            onClick={onDelete}
            size="small"  
            sx={{
                position: 'absolute', 
                top: '-8px',
                right: '-8px',
                width: '24px', 
                height: '24px', 
                backgroundColor: red[500],
                '&:hover': {
                backgroundColor: red[700],
                },
            }}
            >
            <CloseIcon sx={{ color: common.white }} />
            </IconButton>
        </Box>
    )
};


export default UserProfilePolaroid;