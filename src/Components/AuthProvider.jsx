import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    //observer 
    useEffect(() => {
       onAuthStateChanged(auth, (currentUser) => {
            console.log("observe current user", currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        
    },[])
    const authInfo = {user, createUser, signInUser, logOut, loading};


    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;