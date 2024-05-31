import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [reload,setRelaod]=useState(false)


    //create user
    const cerateUser = (email, password) => {
        setLoading(true)
        setRelaod(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        setRelaod(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //sign in with google'
    const sighInWithGoogle=(googleProvider)=>{
        setLoading(true)
        setRelaod(true)
        return signInWithPopup(auth,googleProvider)
    }

    //sign in with github'
    const sighInWithGithub=(githubProvider)=>{
        setLoading(true)
        setRelaod(true)
        return signInWithPopup(auth,githubProvider);
    }

    //Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Objerving current User inside useEffect of AuthProvider", currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [reload])

    //logout user
    const logOutUser=()=>{
        setLoading(true)
        setRelaod(true)
        return signOut(auth)
    }


    //uapdate user Profile
    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName, photoURL });
        
    };






    const authInfo = {
        user,
        loading,
        cerateUser,
        signInUser,
        sighInWithGoogle,
        sighInWithGithub,
        logOutUser,
        updateUserProfile,
        setRelaod,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}