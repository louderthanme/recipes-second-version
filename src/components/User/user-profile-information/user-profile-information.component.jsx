import { Box, Button, Typography, Avatar, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserProfileInformation = ({ user }) => {
  const navigate = useNavigate();

  const goToRecipeUpload = () => {
    navigate("/recipe/upload");
  };

  const placeholderImage = "http://res.cloudinary.com/recipeb00k/image/upload/v1694386289/tqqagkq9y73ejzhglo8a.png";

  return (
    <Box>
      <Grid container alignItems="center">
        {/* Avatar and Details */}
        <Grid item xs={12} md={9}>
          <Grid container alignItems="center">
            {/* Avatar */}
            <Grid item xs={12} md={2} sx={{ textAlign: { xs: 'center', md: 'left' }}}>
              <Box 
                pt={3} 
                pl={{ xs: 0, md: 4 }}
                sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}  // Added this line
              >
                <Avatar 
                  src={user.photoURL || placeholderImage}
                  alt="Profile Pic"
                  sx={{ width: 100, height: 100, marginRight: { md: 2 }, border: '5px solid white' }}
                />
              </Box>
            </Grid>
            {/* User Info */}
            <Grid item xs={12} md={10} sx={{ textAlign: { xs: 'center', md: 'left' }}}>
              <Box pt={3} px={2}>
                <Typography variant="h6" gutterBottom>
                  {user.displayName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {user.email}
                </Typography>
                <Typography variant="body2">
                  Member since: {new Date(user.metadata.creationTime).toLocaleDateString()}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* Upload Button */}
        <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'right' }}}>
          <Box 
            pt={3}
            pr={{ md: 4 }}
          >
            <Button variant="contained" color="secondary" onClick={goToRecipeUpload}>
              Upload a new recipe!
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfileInformation;
