import { Button, Box, Typography } from '@mui/material';
import BaseDetailsBox from '../base-details-box/base-details-box.component';
import { useNavigate } from 'react-router-dom';

const RecipeDetailsWrapper = ({ title, tags, id, handleShareClick, ShareWindowComponent }) => {
  const navigate = useNavigate();
  const goToRecipe = () => {
         navigate(`/recipe/${id}`);
   }

  return (
    <BaseDetailsBox title={title} tags={tags} showPrepCook={false} showIngredients={false}>
     
      <Box 
      display="flex" 
      alignItems="center"
      gap={2} 
      mt={8} 
      mb={2}
      justifyContent={{ xs: 'center', sm: 'center', md: 'center', lg: 'flex-start', xl: 'flex-start'	 }}
      >
        <Button variant="contained" color="warning" onClick={goToRecipe} sx={{fontFamily: 'Architects Daughter'}}>
          Go to Recipe
        </Button>
        <Button variant="contained" color="secondary" onClick={handleShareClick} sx={{fontFamily: 'Architects Daughter'}}>
          Share
        </Button>
        {ShareWindowComponent()} 
      </Box>
    </BaseDetailsBox>
  );
}

export default RecipeDetailsWrapper;
