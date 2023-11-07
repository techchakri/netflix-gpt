import React, {useState,useRef} from "react";
import Header from "./Header";
import { checkSignInValid, checkSignUpValid } from "../utils/validate";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    
    const toggleSignInForm = () => {
        setIsSignInForm((prevState) => !prevState);
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        // validate the form data
        // checkValidData(email,password);

        console.log(email.current.value);
        console.log(password.current.value);

        const message = checkSignInValid(email.current.value,password.current.value);
        setErrorMessage(message);

        // Sign / Sign Up

    };

    const handleSignUp = (event) => {
        event.preventDefault();
        // validate the form data
        // checkValidData(email,password);

        console.log(email.current.value);
        console.log(password.current.value);
        console.log(name.current.value);

        const message = checkSignUpValid(name.current.value,email.current.value,password.current.value);
        setErrorMessage(message);

        // Sign / Sign Up

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
      <form 
      className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className=" font-semibold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-3 my-3 w-full bg-gray-600"
        />}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-600"
        />
        {
            errorMessage && (<p className="text-red-500 font-semibold text-lg py-2">{errorMessage}</p>)
        }

        {
            isSignInForm
            ? (<button
                onClick={handleSignIn}
                className="p-3 my-6 bg-red-700 w-full rounded-lg">Sign In</button>)
            : (<button 
                onClick={handleSignUp}
                className="p-3 my-6 bg-red-700 w-full rounded-lg">Sign Up</button>)
        }
        
        
        <p className="py-4">{isSignInForm? "New to Netflix? " : "Already have Account? "}<span className="text-gray-400 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In Now"}</span></p>
      </form>

    </div>
  );
};

export default Login;
