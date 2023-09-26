import {Box, Typography, Chip} from '@mui/material';

const DetailsBox = ({prep, cook, ingredients, title, tags}) => {
return (
    <Box>   
        <Typography variant='h3' sx={{fontFamily:'Architects Daughter'}}>{title}</Typography>
            
        <Box marginTop={2} align={'left'} marginLeft={3} > 
            {
                prep[0] === 0 && prep[1] === 0 ? (
                  <Typography  sx={{fontFamily:'Architects Daughter'}}> No prep time required </Typography>
                ) : prep[0] === 0 ? (
                  <Typography  sx={{fontFamily:'Architects Daughter'}}>Prep time: {prep[1]} minutes</Typography>
                ) : prep[1] === 0 ? (
                  <Typography  sx={{fontFamily:'Architects Daughter'}}>Prep time: {prep[0]} hour${`(s)`}</Typography>
                ) : (
                  <Typography  sx={{fontFamily:'Architects Daughter'}}>Prep time: {prep[0]} hours, {prep[1]} minutes</Typography>
                )
            }
            {
                cook[0] === 0 && cook[1] === 0 ? (
                    <Typography sx={{fontFamily:'Architects Daughter'}}> No cook time required </Typography>
                ) : cook[0] === 0 ? (
                  <Typography sx={{fontFamily:'Architects Daughter'}}>Cook time: {cook[1]} minutes</Typography>
                ) : cook[1] === 0 ? (
                  <Typography sx={{fontFamily:'Architects Daughter'}}>Cook time: {cook[0]} hours</Typography>
                ) : (
                  <Typography sx={{fontFamily:'Architects Daughter'}}>Cook time: {cook[0]} hours, {cook[1]} minutes</Typography>
                )
              }
                <Typography sx={{fontFamily:'Architects Daughter'}}> {ingredients.length} ingredients</Typography>
                <Box mt={2}>
                  <Typography sx={{fontFamily:'Architects Daughter'}} mb={2}>Tags:</Typography>
                  {tags.map((tag, index) => (
                    <Chip key={index} label={tag} color={'secondary'} style={{ margin: '2px', fontFamily:'Architects Daughter' }} />
                  ))}
                </Box>
        </Box>
    </Box>
)
}

export default DetailsBox;
