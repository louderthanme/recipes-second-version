import { Box, FormControlLabel, Switch } from "@mui/material";

const UserProfileControls = ()=>{
    return (
        <Box 
        px={4}
        sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
        }}
        >
        <h2>My Recipes</h2>
         <FormControlLabel control={<Switch color="secondary" />} label="Manage" />
        </Box>
)
}

export default UserProfileControls;