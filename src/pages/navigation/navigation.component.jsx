import { Fragment, useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import { Box } from "@mui/material";
import { UserContext } from "../../contexts/user.context";


const Navigation = () => {
    const user = useContext(UserContext);
    const {displayName} = user;
    console.log(user,"from navigation")
    console.log(displayName,"from navigationr")

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
                        {user ? 
                            <span>Welcome, {displayName}!</span> : 
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
