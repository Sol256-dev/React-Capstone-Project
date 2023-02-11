import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
// import TrendingMovies from "./components/Trending";
import { useEffect, useState } from "react";
import TrendingMovies from "./components/Trending";

function App() {
  const [movies, setMovies] = useState([]);

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

  console.log(movies);

  return (
    <>
      <NavigationBar />
      <div className="main">
        <h4>Trending Movies & Shows</h4>
        <div className="section">
          {movies.map((item, key) => (
            <div>
              <TrendingMovies title={item.title} overview={item.overview} poster={item.poster_path}/>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
