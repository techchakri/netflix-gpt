import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await data.json();
    return json.results;
  } 

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results
    const gptQuery =
      "Act as a Movie Recommandation System and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
        // TODO: Write Error Handling
    }


    // console.log(gptResults.choices?.[0]?.message?.content);
    // "Andaz Apna Apna, Chupke Chupke, Hera Pheri, Padosan, Chalti Ka Naam Gaadi"

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
    // console.log(gptMovies);
    // ["Andaz Apna Apna", "Chupke Chupke", "Hera Pheri", "Padosan", "Chalti Ka Naam Gaadi"]

    // For each  movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie.trim()))

    
    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full mx-1 md:mx-0 md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 my-4 ml-1 md:m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 mx-3 my-4 md:m-4 py-2 px-4 bg-red-700 text-white  rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
