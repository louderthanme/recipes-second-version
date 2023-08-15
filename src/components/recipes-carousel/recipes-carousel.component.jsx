import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";


const Carousel = ({recipes}) => {


  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  const goToRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <div>No recipes available.</div>;
  }

  return (
    <div style={{ width: '50%', margin: '0 auto', overflow:'hidden' }}>
      <Slider {...settings}>
        {recipes.map((recipe, index) => (
          <div key={index}>
        <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%', height: 'auto' }} />
            <p className="legend" onClick={() => goToRecipe(recipe.id)}>
              {recipe.title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
