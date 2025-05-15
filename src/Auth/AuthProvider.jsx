import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
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
    };

    // -------------------SignOut User--------------------------
    const signOutUser = () => {
        return signOut(auth);
    }
    const info = {
        signInWithGoogle,
        signInWithPassword,
        createUser,
        user,
        setUser,
        loading,
        signOutUser
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
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