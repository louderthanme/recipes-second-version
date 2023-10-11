import { Button } from '@mui/material';
import BaseDetailsBox from './BaseDetailsBox'; // Make sure to import from the correct path

const RecipeDetailsWrapper = ({title,  tags, onShare, onGoToRecipe }) => {
  return (
    <BaseDetailsBox title={title} tags={tags} showPrepCook={false} showIngredients={false}>
      <Button variant="contained" color="primary" onClick={onShare} style={{ marginRight: '10px' }}>
        Share
      </Button>
      <Button variant="contained" color="secondary" onClick={onGoToRecipe}>
        Go to Recipe
      </Button>
    </BaseDetailsBox>
  );
}

export default RecipeDetailsWrapper;
