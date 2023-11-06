import React, {useState} from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    
    const toggleSignInForm = () => {
        setIsSignInForm((prevState) => !prevState);
    };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className=" font-semibold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-3 my-3 w-full bg-gray-600"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-600"
        />
        {
            isSignInForm
            ? (<button className="p-3 my-6 bg-red-700 w-full rounded-lg">Sign In</button>)
            : (<button className="p-3 my-6 bg-red-700 w-full rounded-lg">Sign Up</button>)
        }
        
        
        <p className="py-4">{isSignInForm? "New to Netflix? " : "Already have Account? "}<span className="text-gray-400 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In Now"}</span></p>
      </form>

    </div>
  );
};

export default Login;
