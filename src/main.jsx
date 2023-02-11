import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Movies from "./routes/Movies";
import Tvshows from "./routes/Tvshows";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tvshows",
        element: <Tvshows />,
      },
      {
        path: "/action",
        element: <h1>action</h1>,
      },
      {
        path: "/comedy",
        element: <h1>comedy</h1>,
      },
      {
        path: "/horror",
        element: <h1>horror</h1>,
      },
      {
        path: "/thriller",
        element: <h1>thriller</h1>,
      },
      {
        path: "/kids",
        element: <h1>Just for kids</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
