import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { Box } from "@mui/material";


const Navigation = () => {

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
                        <Link to="/auth">
                            Log In
                        </Link>
                    </Box>
                </Box>
            </div>
            <Outlet /> {/* Renders child routes */}
        </Fragment>
    );
};

export default Navigation;
