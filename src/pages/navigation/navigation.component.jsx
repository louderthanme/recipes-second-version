import { Fragment, useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import { Box } from "@mui/material";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase-utils";
import { capitalizeFirstLetter } from "../../utils/utils";


const Navigation = () => {
    const userCredential = useContext(UserContext);
    const {user} = userCredential;


    return (
        <Fragment> {/* Contains the entire page */}

            <div>
                <Box display={'flex'} justifyContent={'flex-end'} sx={{ backgroundColor: '#FCDDBC' }}>
                    <Box mr={2}>
                        <Link to="/">
                            Home
                        </Link>    
                    </Box>
                    <Box mr={2}>
                        <Link to="/recipe/upload">
                            Upload Recipe
                        </Link>
                    </Box>
                    <Box mr={2}>
                        {user && user.displayName? 
                            <span> {capitalizeFirstLetter(user.displayName)}, 
                                <Link as='span'onClick={signOutUser}>
                                    Sign Out
                                </Link>
                            </span> : 
                            <Link to="/auth">
                                Log In
                            </Link>
                        }
                    </Box>
                </Box>
            </div>
            <Outlet /> {/* Renders child routes */}
        </Fragment>
    );
};

export default Navigation;
