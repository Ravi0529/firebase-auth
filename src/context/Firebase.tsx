import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext(null);

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

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    return <FirebaseContext.Provider value={null}>{props.children}</FirebaseContext.Provider>
};
