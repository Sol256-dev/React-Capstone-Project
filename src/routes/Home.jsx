import UpcomingMovies from "../components/UpcomingMovies";
import TrendingMovies from "../components/Trending";
import axios from "axios";
import { useEffect, useState } from "react";
import TopRated from "../components/TopRated";

const Home = () => {
  const [trendingItems, setTrendingItems] = useState([]);
  const [upcomingItems, setUpcomingItems] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const fetchData = () => {
    const trendingShows =
      "https://api.themoviedb.org/3/trending/all/week?api_key=31366e0b7b440ee4784ea1e0f129e1da";
    const upcomingMovies =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=31366e0b7b440ee4784ea1e0f129e1da&language=en-US&page=10";
    const topRatedMovies =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=31366e0b7b440ee4784ea1e0f129e1da&language=en-US&page=10";

    const getTrendingShows = axios.get(trendingShows);
    const getUpcomingMovies = axios.get(upcomingMovies);
    const getTopRatedMovies = axios.get(topRatedMovies);

    axios.all([getTrendingShows, getUpcomingMovies, getTopRatedMovies]).then(
      axios.spread((...allData) => {
        const allDataTrending = allData[0].data.results;
        const allDataUpcomingMovies = allData[1].data.results;
        const allDataTopRated = allData[2].data.results;

        setTrendingItems(allDataTrending);
        setUpcomingItems(allDataUpcomingMovies);
        setTopRated(allDataTopRated)
        allDataTrending.map((item) => console.log(item));
        // console.log(allDataUpcomingMovies);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <h4>Trending Movies & TV Shows</h4>
      <div className="section">
        {trendingItems.map((item) => (
          <TrendingMovies
            title={item.title}
            release_date={item.release_date}
            score={item.vote_average}
            overview={item.overview}
            poster={item.poster_path}
            backdrop_path={item.backdrop_path}
          />
        ))}
      </div>
      <div className="new-section">
        <h4>Up-Coming Movies</h4>
        <div className="section">
          {upcomingItems.map((movie) => (
            <UpcomingMovies
              title={movie.title}
              media_type={movie.media_type}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </div>
      </div>
      <div className="new-section">
        <h4>Top Rated Movies</h4>
        <div className="section">
          {topRated.map((movie) => (
            <TopRated
              title={movie.title}
              media_type={movie.media_type}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
