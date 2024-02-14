import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./app";
import "./index.css";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

import { About } from "./routes/About";
import ContactDos from "./routes/ContactDos";


//Aqui se definiran las rutas, indicando el path y el comoponente(element: que se va a renderizar)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:contacts/:id=1",
        element: <Contact />,
      },
      {
        path: "/:contacts/:id=2",
        element: <ContactDos/>,
      },
    ],
  },
  {
    path:"/:about",
    element: <About/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

