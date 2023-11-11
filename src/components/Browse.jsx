import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useUpComingMovies();
    useTopRatedMovies();
    useTrendingMovies();

    return <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
        {/* 
        MainContainer
            - VideoBackground
            - VideoTitle
        SecondaryContainer
            - MovieList * n
                - Cards * n
        */}
    </div>
}

export default Browse;