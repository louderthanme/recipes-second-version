import { createContext, useState, useEffect } from 'react';
import { 
  fetchRecipes, 
  updateRecipeInFirestore,
  uploadRecipeToFirestore, 
  deleteRecipeFromFirestore,
  fetchRecipeByIdFromFirestore
 } from '../utils/firebase-utils';

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

  const fetchRecipeById = async (id) => {
    try {
      return await fetchRecipeByIdFromFirestore(id);
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  }

  const updateRecipe = async (id, recipeData, newImageUrl = null) => {
    try {
      const updatedData = newImageUrl ? { ...recipeData, imageUrl: newImageUrl } : recipeData;
      await updateRecipeInFirestore(id, updatedData);
  
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) =>
          recipe.id === id ? { ...recipe, ...updatedData } : recipe
        )
      );
  
      console.log(`Recipe "${recipeData.title}" updated successfully!`);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };
  
  const uploadRecipe = async (recipe, imageUrl) => {
    console.log("Received in uploadRecipe:", recipe, imageUrl); // Add this debug line
    try {
      const newRecipeData = { ...recipe, imageUrl }; // Add imageUrl to the recipe data
      console.log("New recipe data before sending to Firestore:", newRecipeData); // Debug log here
  
      if (!imageUrl) {
        console.error("Image URL is undefined. Aborting upload.");
        return;
      }
  
      const newRecipeId = await uploadRecipeToFirestore(newRecipeData);
      console.log(`Recipe "${recipe.title}" uploaded successfully with ID: ${newRecipeId}`);
      setRecipes((prevRecipes) => [...prevRecipes, { id: newRecipeId, ...newRecipeData }]);
      return newRecipeId;
    } catch (error) {
      console.error("Error uploading recipe to Firestore:", error);
      throw error;
    }
  };
  
  
  const deleteRecipe = async (recipe) => {
    try {
      await deleteRecipeFromFirestore(recipe);
      setRecipes((prevRecipes) => prevRecipes.filter((r) => r.id !== recipe.id));
      console.log(`Recipe "${recipe.title}" deleted successfully!`);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const uploadImageToCloudinary = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    try {
      const response = await fetch('http://localhost:3001/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log("Received from server: ", data); // Debug log here
      return data.imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };
  
  

  const value = { recipes, updateRecipe, uploadRecipe, deleteRecipe, fetchRecipeById, uploadImageToCloudinary };

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;
