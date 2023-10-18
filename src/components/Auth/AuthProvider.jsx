import { createContext, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser]=useState(null);

    const provider = new GoogleAuthProvider();
    

    const login = ()=>{
        const auth = getAuth(app)
    return signInWithPopup(auth , provider)

    }




    const info ={
        user,
        login
    }
    return (
        <AuthContext.Provider value={info}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;