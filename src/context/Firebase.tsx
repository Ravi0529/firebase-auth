import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";

interface FirebaseContextType {
    signupUserWithEmailAndPassword: (email: string, password: string) => Promise<import("firebase/auth").UserCredential>;
    signinUserWithEmailAndPassword: (email: string, password: string) => Promise<import("firebase/auth").UserCredential>;
    signinWithGoogle: () => Promise<import("firebase/auth").UserCredential>;
    signinWithGithub: () => Promise<import("firebase/auth").UserCredential>;
    isLoggedIn: boolean;
}

const FirebaseContext = createContext<FirebaseContextType | null>(null);

const firebaseConfig = {
    apiKey: "AIzaSyBCfE-JJvwk4Agcs-A9fbjPBhXFGHvVuOA",
    authDomain: "bookify-42e7d.firebaseapp.com",
    projectId: "bookify-42e7d",
    storageBucket: "bookify-42e7d.firebasestorage.app",
    messagingSenderId: "769012988674",
    appId: "1:769012988674:web:29285b296743de1fbe201b"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)

const googleProivder = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = (props) => {

    const [user, setUser] = useState<import("firebase/auth").User | null>(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) setUser(user);
            else setUser(null);
        })
    }, []);

    const signupUserWithEmailAndPassword = (email: string, password: string) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPassword = (email: string, password: string) => signInWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProivder);

    const signinWithGithub = () => signInWithPopup(firebaseAuth, githubProvider);

    const isLoggedIn = user ? true : false;

    return <FirebaseContext.Provider value={{
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        signinWithGoogle,
        signinWithGithub,
        isLoggedIn
    }}>{props.children}</FirebaseContext.Provider>
};
