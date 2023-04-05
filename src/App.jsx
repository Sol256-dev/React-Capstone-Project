// import Login from "./routes/auth/Login";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  // const userEmail = useContext(UserContext);

  return (
    <>
      <Navigation />
      {location.state.id == "" ? navigate("/login") : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
