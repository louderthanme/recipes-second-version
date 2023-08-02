import { createContext, useState, useEffect } from 'react';
import { fetchRecipes, updateRecipeInFirestore,uploadRecipeToFirestore } from '../utils/firebase-utils';

export const RecipesContext = createContext([]);

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipesFromFirebase = await fetchRecipes();
        setRecipes(recipesFromFirebase);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    getRecipes();
  }, []);

  const updateRecipe = async (id, recipeData) => {
    try {
      await updateRecipeInFirestore(id, recipeData);
      // If the update in Firestore is successful, update the local state
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) => (recipe.id === id ? { ...recipe, ...recipeData } : recipe))
      );
      console.log(`Recipe "${recipeData.title}" updated successfully!`);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };
  



const uploadRecipe = async (recipe) => {
  try {
    const newRecipeId = await uploadRecipeToFirestore(recipe);
    console.log(`Recipe "${recipe.title}" uploaded successfully with ID: ${newRecipeId}`);
    setRecipes((prevRecipes) => [...prevRecipes, { id: newRecipeId, ...recipe }]);
    return newRecipeId;
  } catch (error) {
    console.error("Error uploading recipe to Firestore:", error);
    throw error;
  }
};




  const value = { recipes, updateRecipe, uploadRecipe };

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;
