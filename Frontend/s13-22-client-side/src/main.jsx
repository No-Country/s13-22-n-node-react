import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./app";
import "./index.css";
import "./reset.css"
import ErrorPage from "./error-page.jsx";
import { Team } from "./routes/Team/Team.jsx";
import {AllProducts} from "./routes/AllProducts/AllProducts.jsx";



//Aqui se definiran las rutas, indicando el path y el comoponente(element: que se va a renderizar)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/productos",
    element: <AllProducts/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
