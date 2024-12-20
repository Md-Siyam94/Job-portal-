import Lottie from "lottie-react";
import SignUpLottie from '../assets/sign-up.json'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const SignUp = () => {
    const {SignUp} = useContext(AuthContext)
    const handleSignUp =(e)=>{
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        const regexPass =  /^(?=.*\d){6,}(?=.*[A-Z]).*$/;
        if(!regexPass.test(password)){
            return alert('One upper case and lower case')
        }

        console.log(email, password)
        SignUp(email, password)
        .then(data=>{
            console.log(data)
            // const user = {email: email}
            // axios.post(`${import.meta.env.VITE_API}/jwt`, user, {withCredentials: true})
            // .then(res=> {
            //     console.log(res.data)
            // })

            form.reset()
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <div className="w-full bg-base-100  ">
            <h1 className="text-4xl font-bold text-center ">Sign up</h1>

            <div className="card bg-base-100 mx-auto lg:w-[45%] w-full shrink-0 shadow-2xl my-9">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="">

                        <div className="w-44">
                            <Lottie animationData={SignUpLottie}></Lottie>
                        </div>

                    </div>
                    <form onSubmit={handleSignUp} className="card-body">
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
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;