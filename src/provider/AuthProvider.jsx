import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase_init';
import axios from 'axios';

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
              // const user = {email: email}
            // axios.post(`${import.meta.env.VITE_API}/jwt`, user, {withCredentials: true})
            // .then(res=> {
            //     console.log(res.data)
            // })

            // set jwt on the authState
            
            if(currentUser?.email){
                const user = {email: currentUser?.email}
                axios.post(`${import.meta.env.VITE_API}/jwt`, user, {withCredentials: true})
                .then(res => {
                    console.log('user login',res.data)
                    setLoading(false)
                })
            }else{
                axios.post(`${import.meta.env.VITE_API}/jwtLogout`, {}, {withCredentials: true})
                .then(res=> {
                    console.log('user logout',res.data);
                    setLoading(false)
                })
            }
            
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