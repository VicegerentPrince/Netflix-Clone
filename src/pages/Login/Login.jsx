import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signUp, login } from "../../firebase";

const Login = () => {

    const [signInState, setSignInState] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const userAuth = async (event) => {
      event.preventDefault();
      if (signInState) {
        await login(email, password)
      } else {
        await signUp(name, email, password)
      }
    }

  return (
    <div className="login h-full">
      <img
        src="Login_Background.jpg"
        alt=""
        className="hidden md:block absolute w-full h-full object-cover mask-radial-from-75% brightness-50 -z-10"
      />
      <div className="login-container flex w-full h-full">
        <div className="login-nav px-8 py-7">
            <img src="logo.png" alt="" className="h-6 md:h-8" />
        </div>
      </div>

      <div className="login-card bg-black/77 m-auto md:w-[45%] md:p-18 p-6 pb-20 mt-24 md:mt-10 md:h-auto ease-in-out">
        <h2 className="font-black text-4xl">{signInState ? "Sign In" : "Sign Up"}</h2>
        <form action="" className="flex flex-col mt-10">
          { !signInState &&
          <input
            type="text"
            className="py-3 px-2 bg-[#333]/40 border-1 border-white/50 rounded-sm"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />}
          <input
            type="email"
            className="py-3 px-2 mt-10 bg-[#333]/40 border-1 border-white/50 rounded-sm"
            placeholder="Email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <input
            type="text"
            className="py-3 px-2 mt-10 bg-[#333]/40 border-1 border-white/50 rounded-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* { !signInState &&
          <input
            type="text"
            className="py-3 px-2 mt-10 bg-[#333]/40 border-1 border-white/50 rounded-sm"
            placeholder="Confirm Password"
          />} */}
          <button onClick={userAuth} className="bg-red-600 hover:bg-red-700 py-2 mt-6 rounded-sm font-bold cursor-pointer transition-colors">
            {signInState ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex items-center gap-3 mt-5">
            <input type="checkbox" className="h-[18px] w-[18px] accent-red-400" />
            <label htmlFor="checkbox">Remember me</label>
          </div>

        { signInState ? 
          <div className="flex gap-2 mt-10">
            <p className="font-semibold text-white/80">New to Netflix?</p>
            <span className="font-bold hover:underline cursor-pointer" onClick={()=> {setSignInState(!signInState)}}>
              Sign up now.
            </span>
          </div>
            :
          <div className="flex gap-2 mt-10">
            <p className="font-semibold text-white/80">Already have an Account?</p>
            <span className="font-bold hover:underline cursor-pointer" onClick={()=> {setSignInState(!signInState)}}>
              Sign In now.
            </span>
          </div> }
        </form>
      </div>
    </div>
  );
};

export default Login;
