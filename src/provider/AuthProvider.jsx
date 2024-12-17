import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase_init';

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading, setLoading] = useState(true)

    const SignUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider )
    }

    const logOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return ()=>{ 
            unSubscribe()
        }
        


    },[])

    const authInfo = {
        user,
        loading,
        SignUp,
        loginUser,
        logOutUser,
        loginWithGoogle

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;