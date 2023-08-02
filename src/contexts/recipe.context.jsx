import React, { createContext, useState, useEffect } from 'react';
import { fetchRecipes, updateRecipe, uploadRecipe } from '../utils/firebase-utils';

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

  const updateRecipeInFirestore = async (id, recipeData) => {
    try {
      await updateRecipe(id, recipeData);
      // If the update in Firestore is successful, update the local state
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) => (recipe.id === id ? { ...recipe, ...recipeData } : recipe))
      );
      console.log(`Recipe "${recipeData.title}" updated successfully!`);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  const uploadRecipeToFirestore = async (id, recipe) => {
    try {
      await uploadRecipe(id, recipe);
      // If the upload in Firestore is successful, update the local state
      setRecipes((prevRecipes) => [...prevRecipes, { id, ...recipe }]);
      console.log(`Recipe "${recipe.title}" uploaded successfully!`);
    } catch (error) {
      console.error('Error uploading recipe to Firestore:', error);
    }
  };

  const value = { recipes, updateRecipeInFirestore, uploadRecipeToFirestore };

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;
