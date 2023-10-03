import { useEffect,useState,createContext } from "react";
import { onAuthStateChangedListener, addRecipeToUserFavorites, removeRecipeFromUserFavorites } from "../utils/firebase-utils";
import GeneralLoadingSpinner from "../components/ui/loading-screens/general-loading-spinner.component";


export const UserContext = createContext();

export const UserProvider= ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);


    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setUser(user);
            console.log(user);
            setLoading(false);
        });
            return unsubscribe;
    } ,[]);

    const addRecipeToFavorites = async (recipeId) => {
        console.log(user.uid, recipeId,'from usr context');
        const updatedFavorites = await addRecipeToUserFavorites(recipeId, user.uid);
        setFavoriteRecipes(updatedFavorites);
    }

    const removeRecipeFromFavorites= async (recipeId) => {
        const updatedFavorites = await removeRecipeFromUserFavorites(recipeId,user.uid);
        setFavoriteRecipes(updatedFavorites);
    }
    
    if (loading) {
        return <GeneralLoadingSpinner/>;
    }
        
    return (
        <UserContext.Provider value={{user, setUser, favoriteRecipes, addRecipeToFavorites, removeRecipeFromFavorites}}>
            {children}
        </UserContext.Provider>
    );
}
