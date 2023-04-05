// import { useContext } from "react";
import Login from "./routes/auth/Login";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {location.state.id ? (
        <>
          <Navigation />
          <Outlet />
          <Footer />
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
}

export default App;
