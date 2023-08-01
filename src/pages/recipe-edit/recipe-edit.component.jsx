import { useContext } from 'react';
import { RecipesContext } from '../../contexts/recipe.context';
import { useParams } from 'react-router-dom';

const RecipeEdit = () =>{
    const {recipes} = useContext(RecipesContext);
    const { id } = useParams();
    const recipe = recipes.find((recipe) => recipe.id === id);

    return(
        <div>
            <h1>{recipe ? recipe.title : 'Loading...'}</h1>
        </div>
    )
}

export default RecipeEdit;
