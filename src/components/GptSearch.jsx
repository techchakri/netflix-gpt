import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG}
          alt="background-image"
        />
      </div>
      <div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </>
    
  );
};

export default GptSearch;
