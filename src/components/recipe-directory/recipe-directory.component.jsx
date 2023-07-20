import PropTypes from 'prop-types';
import RecipeCard from '../recipe-card/recipe-card.component';
import { Box, List, ListItemButton, ListItemText } from '@mui/material';


const propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      images: PropTypes.string.isRequired,
      instructions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          step: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

const RecipeDirectory = ({ recipes }) => {
  return (
      <div>
        <h2>Recipes</h2>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
  );
};

RecipeDirectory.propTypes = propTypes

export default RecipeDirectory;
