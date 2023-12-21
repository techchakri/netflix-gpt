import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkSignInValid, checkSignUpValid } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm((prevState) => !prevState);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    // validate the form data
    let message;

    if (isSignInForm) {
      message = checkSignInValid(email.current.value, password.current.value);
    } else {
      message = checkSignUpValid(
        name.current.value,
        email.current.value,
        password.current.value
      );
    }
    setErrorMessage(message);
    if (message) return;

    // Sign In / Sign Up Logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value, 
            photoURL: USER_AVATAR
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({
                uid,
                email,
                displayName,
                photoURL
            }))
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`)
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG}
          alt="background-image"
        />
      </div>
      <form className="w-3/4 md:w-5/12 lg:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className=" font-semibold text-xl md:text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 md:p-3 md:my-3 w-3/4 md:w-full bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 md:p-3 md:my-3 w-3/4 md:w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 md:p-3 md:my-3 w-3/4 md:w-full bg-gray-600"
        />
        {errorMessage && (
          <p className="text-red-500 font-semibold text-base md:text-lg py-1 md:py-2">
            {errorMessage}
          </p>
        )}

        <button
          onClick={handleButtonClick}
          className="p-2 my-3 md:p-3 md:my-6 bg-red-700 w-1/2 md:w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4">
          {isSignInForm ? "New to Netflix? " : "Already have Account? "}
          <span
            className="text-gray-400 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
