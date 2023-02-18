import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
// import TrendingMovies from "./components/Trending";
import { useContext, useEffect, useState } from "react";
import TrendingMovies from "./components/Trending";
import { UserContext } from "./UserContext";
import Login from "./routes/auth/Login";

function App() {
  const [movies, setMovies] = useState([]);
  const userName = useContext(UserContext);

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTM2NmUwYjdiNDQwZWU0Nzg0ZWExZTBmMTI5ZTFkYSIsInN1YiI6IjYzZTdhMmM2YTJlNjAyMDBkNGFlNzUzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C63NHbjxF6J58AsjOadxZX2Gi99nxUx4MA17u10XIgo"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=31366e0b7b440ee4784ea1e0f129e1da",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      {userName === null ? (
        <Login />
      ) : (
        <>
          <NavigationBar user={userName} />
          <div className="main">
            <h4>Trending Movies & TV Shows</h4>
            <div className="section">
              {movies.map((item, key) => (
                <div>
                  <TrendingMovies
                    title={item.title}
                    media_type={item.media_type}
                    score={item.vote_average}
                    overview={item.overview}
                    poster={item.poster_path}
                  />
                </div>
              ))}
            </div>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}

export default App;
