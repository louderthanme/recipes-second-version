import { Box, FormControlLabel, Switch } from "@mui/material";

const UserProfileControls = ({handleToggle, handleTabChange, activeTab})=>{
    return (
        <Box 
        px={4}
        sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
        }}
        >
        <h2 
        onClick={() => handleTabChange('myRecipes')}
        style={{ fontWeight: activeTab === 'myRecipes' ? 'bold' : 'normal' }}
        >
        My Recipes
        </h2>
        <h2 
        onClick={() => handleTabChange('favorites')}
        style={{ fontWeight: activeTab === 'favorites' ? 'bold' : 'normal' }}
        >
        My Favorite Recipes
        </h2>

         <FormControlLabel control={<Switch color="secondary" />} label="Manage" onClick={handleToggle}/>
        </Box>
)
}

export default UserProfileControls;