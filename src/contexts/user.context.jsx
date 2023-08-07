import { useEffect,useState,createContext } from "react";
import { onAuthStateChangedListener } from "../utils/firebase-utils";

export const UserContext = createContext();

export const UserProvider= ({children}) => {
    const [user,setUser] = useState(null);
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
        return <p>Loading...</p>;
    }
        
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
