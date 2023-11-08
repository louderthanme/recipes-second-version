import { createContext, useState, useEffect, useContext } from 'react';
import { 
  fetchRecipesByUser,
  fetchRecipes, 
  updateRecipeInFirestore,
  uploadRecipeToFirestore, 
  deleteRecipeFromFirestore,
  fetchRecipeByIdFromFirestore,
  fetchRecipesByIdsFromFirestore
} from '../utils/firebase-utils';
import { UserContext } from './user.context';

export const RecipesContext = createContext([]);

const RecipesProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  
  const [recipes, setRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]); 
  const [searchResults, setSearchResults] = useState([]);
  const [favoriteFullRecipes, setFavoriteFullRecipes] = useState([]);

  const [state, setState] = useState({
    recipes: [],
    userRecipes: [],
    searchResults: [],
    favoriteFullRecipes: [],
  });

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipesFromFirebase = await fetchRecipes();
        setState(prevState => ({ ...prevState, recipes: recipesFromFirebase }));
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    getRecipes();
  }, []);

  const fetchUserRecipes = async (userId) => {
    if (!userId) return;
    try {
      const recipesFromFirebase = await fetchRecipesByUser(user);
      setState(prevState => ({ ...prevState, userRecipes: recipesFromFirebase }));
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const fetchFavoriteRecipes = async (favoriteRecipeIds) => {
    if (!favoriteRecipeIds || favoriteRecipeIds.length === 0) return [];
    try {
      const favoriteRecipesFromFirebase = await fetchRecipesByIdsFromFirestore(favoriteRecipeIds);
      setFavoriteFullRecipes(favoriteRecipesFromFirebase); 
    } catch (error) {
      console.error('Error fetching favorite recipes:', error);
    }
  };

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
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };
  
  const uploadRecipe = async (recipe) => {
    if (!recipe) {
      console.error("No recipe data provided. Aborting upload.");
      return;
    }
  
    try {
      if (!recipe.imageUrls) {
        console.warn("No image URLs found. Proceeding without images.");
      }
      
      const newRecipeData = { ...recipe };
      
      const newRecipeId = await uploadRecipeToFirestore(newRecipeData);
      
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
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };
  
  const uploadImagesToCloudinary = async (imageFiles) => {
    const formData = new FormData();
    for (let i = 0; i < imageFiles.length; i++) {
      formData.append('image', imageFiles[i]);
    }
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data.imageUrls; 
    } catch (error) {
      console.error('Error uploading images:', error);
      throw error;
    }
  };

  const batchDeleteImagesFromCloudinary = async (publicIds) => {
    try {
      const response = await fetch('/api/delete-images', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ publicIds }),
      });
      const data = await response.json();
      return data.imageUrls;
    } catch (error) {
      console.error('Error uploading images:', error);
      throw error;
    }
  };

  const searchRecipes = (query) => {
      const filteredRecipes = recipes.filter((recipe) => {
        if (recipe.title.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        if (recipe.ingredients.some((ingredient) => ingredient.name.toLowerCase().includes(query.toLowerCase()))) {
          return true;
        }
        if(recipe.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))){
          return true;
        }
        return false;
      });
      setSearchResults(filteredRecipes);
  }

  const value = { recipes, userRecipes, updateRecipe, uploadRecipe, deleteRecipe, fetchUserRecipes, setUserRecipes, fetchRecipeById, fetchFavoriteRecipes, uploadImagesToCloudinary,batchDeleteImagesFromCloudinary, searchRecipes, searchResults, favoriteFullRecipes };

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
};

export default RecipesProvider;