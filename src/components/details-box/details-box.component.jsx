import {Box, Typography} from '@mui/material';

const DetailsBox = ({prep, cook, ingredients, title}) => {
return (
    <Box>   
        <Typography variant='h3'>{title}</Typography>
            
        <Box marginTop={8} align={'left'} marginLeft={3}> 
            {
                prep[0] === 0 && prep[1] === 0 ? (
                  <Typography> No prep time required </Typography>
                ) : prep[0] === 0 ? (
                  <Typography>Prep time: {prep[1]} minutes</Typography>
                ) : prep[1] === 0 ? (
                  <Typography>Prep time: {prep[0]} hour${`(s)`}</Typography>
                ) : (
                  <Typography>Prep time: {prep[0]} hours, {prep[1]} minutes</Typography>
                )
            }
            {
                cook[0] === 0 && cook[1] === 0 ? (
                    <Typography> No cook time required </Typography>
                ) : cook[0] === 0 ? (
                  <Typography>Cook time: {cook[1]} minutes</Typography>
                ) : cook[1] === 0 ? (
                  <Typography>Cook time: {cook[0]} hours</Typography>
                ) : (
                  <Typography>Cook time: {cook[0]} hours, {cook[1]} minutes</Typography>
                )
              }
                <Typography> {ingredients.length} ingredients</Typography>
        </Box>
    </Box>
)
}

export default DetailsBox;
