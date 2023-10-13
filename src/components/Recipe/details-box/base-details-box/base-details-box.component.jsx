// Import necessary components from MUI library
import { Box, Typography, Chip, useMediaQuery, useTheme, Button } from '@mui/material';
import { StyledChip } from '../../../../utils/styledComponents';

// Create BaseDetailsBox functional component 
const BaseDetailsBox = ({ title, prep, cook, ingredients, tags, children, showPrepCook = true, showIngredients = true }) => {
    // Access the theme
    const theme = useTheme();

    // Set breakpoints for mobile and tablet views
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const showMarginTop = !showPrepCook && !showIngredients;


    return (
        <Box>
            {/* Display the title */}
            <Typography mt={showMarginTop ? 4:0} variant='h2' align={isTablet ? 'center' : 'inherit'} sx={{ fontFamily: 'Caveat', color:'#3C371B' }}>{title}</Typography>
            
            <Box marginTop={2} align={isMobile ? 'center' : 'left'} marginLeft={isMobile ? 0 : 3}> 

                {/* Display prep time information */}
                {showPrepCook && prep && (
                    prep[0] === 0 && prep[1] === 0 ? (
                        <Typography textAlign={isTablet ? 'center' : 'inherit'} sx={{ fontFamily: 'caveat', fontSize: '22px' }}> No prep time required </Typography>
                    ) : (
                        <Typography textAlign={isTablet ? 'center' : 'inherit'} sx={{ fontFamily: 'caveat', fontSize: '22px' }}>
                            <Box component="span" sx={{ fontWeight: 'bold' }}>Prep time: </Box> 
                            {prep[0] > 0 && `${prep[0]} hour${prep[0] > 1 ? 's' : ''}${prep[1] > 0 ? ', ' : ''}`}
                            {prep[1] > 0 && `${prep[1]} minute${prep[1] > 1 ? 's' : ''}`}
                        </Typography>
                    )
                )}

                {/* Display cook time information */}
                {showIngredients && cook && (
                    cook[0] === 0 && cook[1] === 0 ? (
                        <Typography textAlign={isTablet ? 'center' : 'inherit'} sx={{ fontFamily: 'caveat', fontSize: '22px' }}> No cook time required </Typography>
                    ) : (
                        <Typography textAlign={isTablet ? 'center' : 'inherit'} sx={{ fontFamily: 'caveat', fontSize: '22px' }}>
                            <Box component="span" sx={{ fontWeight: 'bold' }}>Cook time: </Box>
                            {cook[0] > 0 && `${cook[0]} hour${cook[0] > 1 ? 's' : ''}${cook[1] > 0 ? ', ' : ''}`}
                            {cook[1] > 0 && `${cook[1]} minute${cook[1] > 1 ? 's' : ''}`}
                        </Typography>
                    )
                )}

                {/* Display total number of ingredients */}
                {ingredients && (
                    <Typography textAlign={isTablet ? 'center' : 'inherit'} sx={{ fontFamily: 'caveat', fontSize: '22px' }}>
                        {ingredients.length} ingredients
                    </Typography>
                )}

                <Box mt={showMarginTop ? 6: 0} >
                    {/* Display tags */}
                    <Typography  textAlign={isTablet ? 'center' : 'inherit'}  mb={2} sx={{ fontFamily: 'Architects Daughter', fontSize: '22px' }}>
                        Tags:
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1} justifyContent={isTablet ? 'center':'flex-start'}>
                        {tags.map((tag, index) => (
                            <StyledChip key={index} label={tag} color="secondary" />
                        ))}
                    </Box>
                </Box>

                {/* Render any children passed to this component */}
                {children}
            </Box>
        </Box>
    );
}

// Export the BaseDetailsBox component for use in other files
export default BaseDetailsBox;
