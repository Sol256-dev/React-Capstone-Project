import MovieCard from "./components/MovieCard";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="main">
        <MovieCard />
      </div>
    </>
  );
}

export default App;
