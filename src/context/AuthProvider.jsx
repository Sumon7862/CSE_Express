import {
    createContext,
    useEffect,
    useState,
} from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    updateProfile,
    onAuthStateChanged,
} from "firebase/auth";

import auth from "../firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = async (email, password) => {

        setLoading(true);

        try {

            return await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        } finally {

            setLoading(false);

        }

    };

    const loginUser = async (email, password) => {

        setLoading(true);

        try {

            return await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

        } finally {

            setLoading(false);

        }

    };

    const googleLogin = async () => {

        setLoading(true);

        try {

            return await signInWithPopup(
                auth,
                googleProvider
            );

        } finally {

            setLoading(false);

        }

    };

    const logoutUser = async () => {

        setLoading(true);

        try {

            return await signOut(auth);

        } finally {

            setLoading(false);

        }

    };

    const resetPassword = async (email) => {

        setLoading(true);

        try {

            return await sendPasswordResetEmail(
                auth,
                email
            );

        } finally {

            setLoading(false);

        }

    };

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL,
        });
    };

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(
            auth,
            (currentUser) => {

                setUser(currentUser);

                setLoading(false);

            }
        );

        return () => unsubscribe();

    }, []);

    const authInfo = {
        user,
        loading,
        setUser,
        setLoading,

        createUser,
        loginUser,
        googleLogin,
        logoutUser,
        resetPassword,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;