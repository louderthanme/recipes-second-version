import { Button, Box } from '@mui/material';
import BaseDetailsBox from '../base-details-box/base-details-box.component';
import { useNavigate } from 'react-router-dom';

const RecipeDetailsWrapper = ({ title, tags, id, handleShareClick, ShareWindowComponent }) => {
  const navigate = useNavigate();
  const goToRecipe = () => {
         navigate(`/recipe/${id}`);
   }

  return (
    <BaseDetailsBox title={title} tags={tags} showPrepCook={false} showIngredients={false}>
      <Box display="flex" alignItems="center" gap={2} mt={8} mb={2}>
        <Button variant="contained" color="warning" onClick={goToRecipe}>
          Go to Recipe
        </Button>
        <Button variant="contained" color="secondary" onClick={handleShareClick}>
          Share
        </Button>
        {ShareWindowComponent()} 
      </Box>
    </BaseDetailsBox>
  );
}

export default RecipeDetailsWrapper;
