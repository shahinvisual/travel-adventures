import { createContext, useEffect } from "react";
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../firebase.config";

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    // -------------------SignIn With Google-------------
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // -------------------CreateUser with Email & Password-------------
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    // -------------------SignIn with Email & Password-------------
    const signInWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const info = {
        signInWithGoogle,
        signInWithPassword,
        createUser,
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;