import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const location = useLocation()
    const {user, loading } = useContext(AuthContext)
    if(loading){
        return <div className="w-full "><span className="loading loading-bars loading-lg "></span></div>
    }

    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivetRoute;