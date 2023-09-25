import { useEffect,useState,createContext } from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase-utils";
import GeneralLoadingSpinner from "../components/ui/loading-screens/general-loading-spinner.component";


export const UserContext = createContext();

export const UserProvider= ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setUser(user);
            console.log(user);
            setLoading(false);
        });
            return unsubscribe;
    } ,[]);
    
    if (loading) {
        return <GeneralLoadingSpinner/>;
    }
        
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}
