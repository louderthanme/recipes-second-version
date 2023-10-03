import {Box, Typography, Chip, useMediaQuery, useTheme} from '@mui/material';

const DetailsBox = ({prep, cook, ingredients, title, tags}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

return (
    <Box>   
      <Typography variant='h2' align={isTablet ? 'center' : 'inherit'} sx={{fontFamily:'caveat'}}>{title}</Typography>
            
      <Box marginTop={2} align={isMobile ? 'center' : 'left'} marginLeft={isMobile ? 0 : 3}> 
            {
              prep[0] === 0 && prep[1] === 0 ? (
                  <Typography sx={{fontFamily:'caveat', fontSize:'22px'}}> No prep time required </Typography>
              ) : prep[0] === 0 ? (
                  <Typography sx={{fontFamily:'caveat', fontSize:'22px'}}>
                      <Box component="span" sx={{fontWeight: 'bold'}}>Prep time:</Box> {prep[1]} minutes
                  </Typography>
              ) : prep[1] === 0 ? (
                  <Typography sx={{fontFamily:'caveat', fontSize:'22px'}}>
                      <Box component="span" sx={{fontWeight: 'bold'}}>Prep time:</Box> {prep[0]} hour${`(s)`}
                  </Typography>
              ) : (
                  <Typography sx={{fontFamily:'caveat', fontSize:'22px'}}>
                      <Box component="span" sx={{fontWeight: 'bold'}}>Prep time:</Box> {prep[0]} hours, {prep[1]} minutes
                  </Typography>
              )
            }
            {
                cook[0] === 0 && cook[1] === 0 ? (
                    <Typography sx={{fontFamily:'caveat', fontSize:'22px'}} > No cook time required </Typography>
                ) : cook[0] === 0 ? (
                    <Typography sx={{fontFamily:'caveat', fontSize:'22px'}} >
                        <Box component="span" sx={{fontWeight: 'bold'}}>Cook time:</Box> {cook[1]} minutes
                    </Typography>
                ) : cook[1] === 0 ? (
                    <Typography sx={{fontFamily:'caveat', fontSize:'22px'}} >
                        <Box component="span" sx={{fontWeight: 'bold'}}>Cook time:</Box> {cook[0]} hours
                    </Typography>
                ) : (
                    <Typography sx={{fontFamily:'caveat', fontSize:'22px'}}>
                        <Box component="span" sx={{fontWeight: 'bold'}}>Cook time:</Box> {cook[0]} hours, {cook[1]} minutes
                    </Typography>
                )
              }

                <Typography sx={{fontFamily:'caveat', fontSize:'22px'}} > {ingredients.length} ingredients</Typography>
                <Box mt={2}>
                  <Typography  mb={2} sx={{fontFamily:'caveat', fontSize:'22px'}}>Tags:</Typography>
                  {tags.map((tag, index) => (
                    <Chip key={index} label={tag} color={'secondary'} style={{ margin: '2px', fontFamily:'Architects Daughter' }} />
                  ))}
                </Box>
        </Box>
    </Box>
)
}

export default DetailsBox;
