import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

interface FirebaseContextType {
    signupUserWithEmailAndPassword: (email: string, password: string) => Promise<import("firebase/auth").UserCredential>;
    signinUserWithEmailAndPassword: (email: string, password: string) => Promise<import("firebase/auth").UserCredential>;
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

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = (props) => {

    const signupUserWithEmailAndPassword = (email: string, password: string) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPassword = (email: string, password: string) => signInWithEmailAndPassword(firebaseAuth, email, password);

    return <FirebaseContext.Provider value={{
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword
    }}>{props.children}</FirebaseContext.Provider>
};
