import { Fragment, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AppBar, Typography, Button, Box } from "@mui/material";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase-utils";
import { capitalize } from "../../utils/utils";
import { StyledToolbar } from "../../utils/styledComponents";


const Navigation = () => {
  const userCredential = useContext(UserContext);
  const { user } = userCredential;
  const location = useLocation();

  return (
    <Fragment>
      <AppBar position="fixed" sx={{ backgroundColor: "#517664" }}>
        <StyledToolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography 
              variant="body1" 
              sx={{ display:'inline-block', fontSize:'16px', color: "#ffffff", '&:hover': { color: '#FF784F' } }}
            >
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>HOME</Link>
            </Typography>
          </Box>
          <Button sx={{ fontSize: '14px', color: "#ffffff", '&:hover': { color: '#FF784F' } }}>
            <Link to="/recipe/upload" style={{ textDecoration: 'none', color: 'inherit' }}>Upload Recipe</Link>
          </Button>
          {user && user.displayName ? (
            <Fragment>
              <Typography 
                variant="body1" 
                sx={{ fontSize: '14px', color: "#ffffff", '&:hover': { color: '#FF784F' } }}
              >
                <Link to="/user/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {capitalize(user.displayName)}
                </Link>
              </Typography>
              <Button sx={{ fontSize: '14px', color: "#ffffff", '&:hover': { color: '#FF784F' } }} onClick={signOutUser}>
                Sign Out
              </Button>
            </Fragment>
          ) : (
            <Button sx={{ fontSize: '14px', color: "#ffffff", '&:hover': { color: '#FF784F' } }}>
              <Link to="/auth" state={{background: location}} style={{ textDecoration: 'none', color: 'inherit' }}>Log In</Link>
            </Button>
          )}
        </StyledToolbar>
      </AppBar>
      <StyledToolbar />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
