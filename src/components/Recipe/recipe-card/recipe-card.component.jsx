import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent,CardMedia, Button, Typography } from '@mui/material';

const propTypes = {
    recipe: PropTypes.shape({
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
    }).isRequired
  };


const RecipeCard = ({ recipe }) => {
  const { id, title } = recipe;
  // console.log(recipe)
  
  const navigate = useNavigate()
  const goToRecipe = () => {
    navigate(`/recipe/${id}`)
}

  return (
    <div key={id}>
      <Card sx={{"&:hover": {
        boxShadow: '0 0 0 4px bisque',
        transition: 'box-shadow 0.3s ease-in-out'}}}>
        <CardMedia
          component="img"
          alt="food"
          height="140"
          src="https://res.cloudinary.com/drrtkq22t/image/upload/v1673143100/recipes/3_xscqza.jpg"
        />
        <CardContent>
          <Typography variant="h6" component="div"> {title} </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={goToRecipe}>how to make it</Button>
        </CardActions>
      </Card>
    </div>
  );
};



RecipeCard.propTypes = propTypes

export default RecipeCard;
