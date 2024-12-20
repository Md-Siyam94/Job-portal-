import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance= axios.create({
    baseURL: `${import.meta.env.VITE_API}`,
    withCredentials: true,
})
const useAxios = () => {
    const {logOutUser} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        } , error=>{
            if(error.status === 401 || error.status === 403){
                logOutUser()
                .then(()=> {
                    navigate('/login')
                })
                .catch(err=> console.log('log out error',err.message))
            }
            return Promise.reject(error)
        })
    },[])
    return axiosInstance
};

export default useAxios;