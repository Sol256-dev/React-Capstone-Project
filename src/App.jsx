import { useContext } from "react";
// import "./App.css";
import Login from "./routes/auth/Login";
import { Outlet } from "react-router-dom";
import Home from "./routes/Home";
import { UserContext } from "./UserContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const userEmail = useContext(UserContext);

  return (
    <>
      {userEmail == "" ? (
        <>
          <Navigation />
          <Home />
        </>
      ) : (
        <Login />
      )}
      <Footer />
    </>
  );
}

export default App;
