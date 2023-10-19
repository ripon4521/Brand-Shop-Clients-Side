import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const[user , setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const googleLogin = ()=>{

        return signInWithPopup(auth ,provider)
    }

    const logOut = ()=>{
       
        return signOut(auth)
    }

    const sighnUp = (email,passward)=>{
       
        return createUserWithEmailAndPassword(auth,email,passward)
    }

    const login =(email,passward)=>{
    
        return signInWithEmailAndPassword(auth,email,passward)
    }



    useEffect(()=>{
        const UnSubscribe= onAuthStateChanged(auth, CurrentUser =>{
            // console.log(CurrentUser);
        
            setUser(CurrentUser)
      
        })
        return ()=>{
            UnSubscribe();
        }
    });

    const authInfo={
        user,
        googleLogin,
        logOut,
        sighnUp,
        login
    }
    return (
    
             <AuthContext.Provider value={authInfo}> 
         {children}
     </AuthContext.Provider>
  
    );
};

export default AuthProvider;