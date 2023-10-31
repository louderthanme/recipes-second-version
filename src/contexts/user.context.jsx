import { useEffect, useState, createContext } from "react";
import { onAuthStateChangedListener, addRecipeToUserFavorites, removeRecipeFromUserFavorites, fetchFavoritesFromUserFavorites } from "../utils/firebase-utils";
import GeneralLoadingSpinner from "../components/ui/loading-screens/general-loading-spinner.component";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        const favorites = await fetchFavoritesFromUserFavorites(user);
        setFavoriteRecipes(favorites || []);
      }
    }
    fetchFavorites();
  }, [user]);

  const addRecipeToFavorites = async (recipeId) => {
    const updatedFavorites = await addRecipeToUserFavorites(recipeId, user.uid);
    setFavoriteRecipes(updatedFavorites);
  }

  const removeRecipeFromFavorites = async (recipeId) => {
    const updatedFavorites = await removeRecipeFromUserFavorites(recipeId, user.uid);
    setFavoriteRecipes(updatedFavorites);
  }

  if (loading) {
    return <GeneralLoadingSpinner />;
  }

  return (
    <UserContext.Provider value={{ user, favoriteRecipes, addRecipeToFavorites, removeRecipeFromFavorites }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;