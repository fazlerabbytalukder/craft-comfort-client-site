import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import initilizeFirebase from "../pages/Login/Firebase/firebase.init";

initilizeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const auth = getAuth();

    //sign in with google
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.from || '/';
                navigate(destination);
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //new user register
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database 
                saveUser(email, name, 'POST');
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //user login
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])


    //admin or non admin related work
    useEffect(() => {
        setIsAdminLoading(true);
        fetch(`https://craft-comfort-server-site.onrender.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
                setIsAdminLoading(false);
            });
    },[user.email])



    //logout system
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    //save user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://craft-comfort-server-site.onrender.com/users', {
            method: method,
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }


    //return method all
    return {
        user,
        admin,
        isAdminLoading,
        isLoading,
        authError,
        loginUser,
        registerUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;