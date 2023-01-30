import { useEffect, useState } from "react";
import initializeFirebase from '../components/Login/Firebase/firebase.init';
import {createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const registerUser = (email, password, name, navigate) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                   
                    fetch('https://power-hack-server-yq09.onrender.com/registration', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
            
                        .then()
                
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                navigate('/');
            })
            .catch((error) => {

                setAuthError(error?.code?.split('auth/',)[1]);
                // ..
            })
            .finally(() => setIsloading(false));
    }

    const loginUser = (email, password, location, navigate) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential?.user;
                saveUserLogin(user?.email, user?.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {

                setAuthError(error?.code?.split('auth/',)[1]);
            })
            .finally(() => setIsloading(false));

    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                setUser(user);
            } else {
                setUser({})
            }
            setIsloading(false);
        });

        return () => unSubscribed;
    }, [auth])

    // admin useEffect
    useEffect(() => {
        fetch(`https://power-hack-server-yq09.onrender.com/registration/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user.email])

    const logOut = () => {
        setIsloading(true);
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => setIsloading(false));;
    }


    /* ==========GOOGLE AUTHENTICATION================= */

    const signInWithGoogle = (location, navigate) => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUserLogin(user?.email, user?.displayName, 'PUT')
                saveUserRegister(user?.email, user?.displayName, 'POST')
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error?.code?.split('auth/',)[1]);
            })
            .finally(() => setIsloading(false));
    }


    const saveUserLogin = (email, displayName, method) => {
        const user = { email, displayName };
        fetch(`https://power-hack-server-yq09.onrender.com/login/${user?.email}`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then()
    }

    const saveUserRegister = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://power-hack-server-yq09.onrender.com/registration', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then()
    }


    return {
        user,
        admin,
        authError,
        registerUser,
        isLoading,
        signInWithGoogle,
        loginUser,
        logOut,
    }
}
export default useFirebase;