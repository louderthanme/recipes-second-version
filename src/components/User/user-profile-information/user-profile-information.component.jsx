import { Box, Button, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserProfileInformation = ({ user }) => {
  const navigate = useNavigate();

  const goToRecipeUpload = () => {
    navigate('/recipe/upload');
  }

  const placeholderImage = "http://res.cloudinary.com/recipeb00k/image/upload/v1694386289/tqqagkq9y73ejzhglo8a.png"  // replace this with the actual path

  return (
    <Box>
      <Box 
        
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Profile Picture or Placeholder */}
        <Box 
        display="flex" 
        alignItems="center"
        pt={3}
        px={4}>
          <Avatar 
            src={user.photoURL || placeholderImage}
            alt="Profile Pic"
            sx={{ width: 100, height: 100, marginRight: 2, border: '5px solid white' }}
            />
          <Box>
            <Typography variant="h6" gutterBottom sx={{ marginBottom: 0 }}>
              {user.displayName}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {user.email}
            </Typography>
          </Box>
        </Box>

        {/* Metadata */}
        <Box
        p={4}
        >
          <Typography variant="body2">
            Member since: {new Date(user.metadata.creationTime).toLocaleDateString()}
          </Typography>
        </Box>

      </Box>

      {/* Upload Button */}
      <Box 
        px={4}
        pb={2}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button variant="contained" color="secondary" onClick={goToRecipeUpload}>
          Upload a new recipe!
        </Button>
      </Box>
    </Box>
  );
}

export default UserProfileInformation;
