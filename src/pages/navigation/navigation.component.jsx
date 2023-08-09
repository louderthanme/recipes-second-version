import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase-utils";
import { capitalizeFirstLetter } from "../../utils/utils";

const Navigation = () => {
  const userCredential = useContext(UserContext);
  const { user } = userCredential;

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
            boxShadow: "0px 0px 2px rgba(0,0,0,0.1)"
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
                <Link to="/profile">
                {capitalizeFirstLetter(user.displayName)}, &nbsp;
                </Link>
                <Link as="span" onClick={signOutUser}>
                  Sign Out
                </Link>
              </Typography>
            ) : (
              <Typography variant="body1">
                <Link to="/auth">Log In</Link>
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
