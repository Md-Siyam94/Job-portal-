import Lottie from "lottie-react";
import LoginLottie from '../assets/login.json'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "./shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleLogin =(e)=>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        loginUser(email, password)
        .then(data=>{
            console.log(data)
            navigate(location?.state ? location.state : '/')
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    return (
        <div className="w-full bg-base-100  ">
        <h1 className="text-4xl font-bold text-center ">Login your Account</h1>

        <div className="card bg-base-100 mx-auto lg:w-[45%] w-full shrink-0 shadow-2xl my-9">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="">

                    <div className="w-44">
                        <Lottie animationData={LoginLottie}></Lottie>
                    </div>

                </div>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                    <SocialLogin></SocialLogin>
                </div>
                </form>
                
            </div>
        </div>
    </div>
    );
};

export default Login;