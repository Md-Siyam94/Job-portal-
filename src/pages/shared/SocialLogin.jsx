import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {loginWithGoogle} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then(result=>{
            console.log(result)
            navigate(location?.state ? location.state : '/')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button className="btn w-full" onClick={handleGoogleLogin}>Login With Google</button>
        </div>
    );
};

export default SocialLogin;