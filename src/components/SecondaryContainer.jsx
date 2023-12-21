import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    return movies.nowPlayingMovies  && movies.popularMovies && movies.upComingMovies && movies.topRatedMovies && movies.trendingMovies && (
    <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcomming Movies"} movies={movies.upComingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
        </div>
        {/* 
        MovieList - Popular
          MovieCard
        MovieList - Now Playing
          
        MovieList - Trending
        MovieList - HorrorMovie
        */}
    </div>)
}

export default SecondaryContainer;