import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Register with email and password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in with email and password
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign in with google 
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, googleAuthProvider)
    }
    // sign out 
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;