import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChange, signOut } from "firebase/auth";


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }

    useEffect(() => {
        onAuthStateChange(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;