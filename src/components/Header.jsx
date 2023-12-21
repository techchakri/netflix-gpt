import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate("/browse");
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
          }
        });

        // unsubscribe when component unmounts
        return () => {
            unsubscribe();
        }
      }, []);

      const handleGptSearchClick = () => {
        // Toggle GPT Search
        dispatch(toggleGptSearchView());
      }

      const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
      }

    return <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img 
        className="w-44 mx-auto md:mx-0"
        src={LOGO} 
        alt="logo" />
        {user && (
        <div className="flex justify-evenly items-center gap-3">
          { showGptSearch && (<select name="" id="" className="p-2 m-2 bg-gray-900 text-white rounded-md" onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>
              ))
            }
          </select>)}
            <p className="text-white text-sm md:text-base font-medium text-lg">{user.displayName}</p>
            <button 
            onClick={handleGptSearchClick}
            className="py-2 px-2 md:px-4 bg-purple-800 text-white text-sm md:text-base rounded-lg"
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <img className="hidden md:block w-12 h-12" src={user.photoURL} alt="usericon" />
            <button
            onClick={handleSignOut} 
            className="bg-red-500 text-white text-sm md:text-base py-1 px-2 rounded-md">Sign Out</button>
        </div>
        )
        }
    </div>
}

export default Header;