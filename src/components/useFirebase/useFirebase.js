import React, { useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
const auth = getAuth(app);
const useFirebase = () => {
    const [googleUser, setGoogleUser] = useState({});

    const signInWithGoogle = () => {
        const GoogleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, GoogleProvider)
            .then((res) => { setGoogleUser(res.user) })
            .catch((error) => { console.log(error) })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setGoogleUser(user);
        })
    }, [])

    const handleSignOut = () => {
        signOut(auth)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log()
            })
    }
    console.log(googleUser, "From useFirebase")
    return {
        googleUser,
        handleSignOut,
        signInWithGoogle
    }
};

export default useFirebase;