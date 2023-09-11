import { Fragment, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Box, Typography} from "@mui/material";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase-utils";
import { capitalizeFirstLetter } from "../../utils/utils";

const Navigation = () => {
  const userCredential = useContext(UserContext);
  const { user } = userCredential;
  const location = useLocation();


  return (
    <Fragment>
      <div>
      <Box
        p={1}
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#517664",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.1)",
          position: 'fixed',  // this line fixes the navbar to the top
          top: 0,             // this line positions the navbar at the top
          width: '100%',      // this line makes the navbar span the full width
          zIndex: 1           // this line ensures the navbar stays above other content
        }}
      >
          <Box mr={2}>
            <Typography variant="body1">
              <Link to="/">Home</Link>
            </Typography>
          </Box>
          <Box mr={2}>
            <Typography variant="body1">
              <Link to="/recipe/upload">Upload Recipe</Link>
            </Typography>
          </Box>
          <Box mr={2}>
            {user && user.displayName ? (
              <Typography as="span" sx={{ color: "#db9d47" }}>
                <Link to="/user/profile" sx={{textDecoration: 'none' }}>
                {capitalizeFirstLetter(user.displayName)}, &nbsp;
                </Link>
                <Link as="span" onClick={signOutUser}>
                  Sign Out
                </Link>
              </Typography>
            ) : (
              <Typography variant="body1">
                <Link to= "/auth" state={{background: location}}> Log In</Link>
              </Typography>
            )}
          </Box>
        </Box>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
