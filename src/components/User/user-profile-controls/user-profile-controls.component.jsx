import React from 'react';
import { Box, Switch, Tab } from "@mui/material";
import { StyledTabs, StyledFormControlLabel } from '../../../utils/styledComponents';

const UserProfileControls = ({ handleToggle, handleTabChange, activeTab }) => {
    const tabIndex = activeTab === 'myRecipes' ? 0 : 1;

    const handleChange = (event, newValue) => {
        if (newValue === 0) {
            handleTabChange('myRecipes');
        } else {
            handleTabChange('favorites');
        }
    };

    return (
        <Box
            px={4}
            py={0}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <StyledTabs value={tabIndex} onChange={handleChange} variant="fullWidth" sx={{style:{display:'none'}}}>
                <Tab label="My Recipes" />
                <Tab label="My Favorite Recipes" />
            </StyledTabs>

            <StyledFormControlLabel control={<Switch color="secondary" />}  label="Manage" onClick={handleToggle} />
        </Box>
    );
}

export default UserProfileControls;
