import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import Login from "./routes/auth/Login";
import Signup from "./routes/auth/Signup";
import Home from "./routes/Home";
import { UserContext } from "./UserContext";
import Movies from "./routes/Movies";
import Tvshows from "./routes/TvShows";
import AddMovie from "./routes/AddMovie";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      {/* loader={fetchData} */}
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvshows" element={<Tvshows />} />
      <Route path="/add-movie" element={<AddMovie />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Route>
  )
);

// const routers = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//     ],
//   },
//   {
//     path: "/login/",
//     element: <Login />,
//   },
//   {
//     path: "/signup/",
//     element: <Signup />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext.Provider value={localStorage.getItem("key")}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </UserContext.Provider>
);
