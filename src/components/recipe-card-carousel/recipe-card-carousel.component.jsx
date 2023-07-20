import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

const RecipeCarousel = ({ recipes }) => { // Use the recipes prop directly
  const navigate = useNavigate();

  const goToRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  if (!Array.isArray(recipes)) {
    return <div>No recipes available.</div>;
  }

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <Carousel infiniteLoop dynamicHeight centerMode showThumbs={false}>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <p className="legend" onClick={() => goToRecipe(recipe.id)}>
              {recipe.title}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecipeCarousel;
