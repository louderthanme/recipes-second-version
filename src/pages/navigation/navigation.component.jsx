// React and hooks
import { Fragment, useContext } from "react";

// Router
import { Outlet, Link, useLocation } from "react-router-dom";

// Material UI components
import { AppBar, Typography, Button, Box } from "@mui/material";

// Contexts
import { UserContext } from "../../contexts/user.context";

// Utils
import { signOutUser } from "../../utils/firebase-utils";
import { capitalize } from "../../utils/utils";

// Styled components
import { StyledToolbar } from "../../utils/styledComponents";

const Navigation = () => {
  const userCredential = useContext(UserContext);
  const { user } = userCredential;
  const location = useLocation();

  return (
    <Fragment>
      {/* AppBar Section */}
      <AppBar position="fixed" sx={{ backgroundColor: "#517664" }}>
        <StyledToolbar>
          {/* Home Link */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                display:'inline-block', 
                fontSize:'16px', 
                color: "#ffffff", 
                '&:hover': { color: '#FF784F' } 
              }}
            >
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                HOME
              </Link>
            </Typography>
          </Box>

          {/* Upload Recipe Button */}
          <Button sx={{ fontSize: '14px', color: "#ffffff", '&:hover': { color: '#FF784F' } }}>
            <Link to="/recipe/upload" style={{ textDecoration: 'none', color: 'inherit' }}>
              Upload Recipe
            </Link>
          </Button>

          {/* User Section */}
          {user && user.displayName ? (
            <Fragment>
              {/* User Profile Link */}
              <Typography 
                variant="body1" 
                sx={{ fontSize: '14px', color: "#ffffff", '&:hover': { color: '#FF784F' } }}
              >
                <Link to="/user/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {capitalize(user.displayName)}
                </Link>
              </Typography>

              {/* Sign Out Button */}
              <Button sx={{ fontSize: '14px', color: "#ffffff", '&:hover': { color: '#FF784F' } }} onClick={signOutUser}>
                Sign Out
              </Button>
            </Fragment>
          ) : (
            /* Log In Button */
            <Button sx={{ fontSize: '14px', color: "#ffffff", '&:hover': { color: '#FF784F' } }}>
              <Link to="/auth" state={{background: location}} style={{ textDecoration: 'none', color: 'inherit' }}>
                Log In
              </Link>
            </Button>
          )}
        </StyledToolbar>
      </AppBar>

      <StyledToolbar />
      
      {/* Outlet for child routes */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;