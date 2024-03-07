import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./app";
import "./index.css";
import "./reset.css";
import ErrorPage from "./error-page.jsx";
import { Team } from "./routes/Team/Team.jsx";
import { AllProducts } from "./routes/AllProducts/AllProducts.jsx";
import { Register } from "./routes/Register/Register.jsx";
import { Login } from "./routes/Login/Login.jsx";
import { AddProduct } from "./components/AddProduct/AddProduct.jsx";
import { DetalleProducto } from "./components/Detalleproducto/Detalleproducto.jsx";
import ProductCategory from "./routes/AllProducts/ProductCategory.jsx";

import { User } from "./routes/User/User.jsx";
import { UserEdit } from "./routes/User-edit/UserEdit.jsx";
import { HeroLogged } from "./routes/HeroLogged/HeroLogged.jsx";

import { AppProvider } from "./context.jsx";
import PanelAdmin from "./routes/PanelAdmin/PanelAdmin.jsx";
import OrdersPage from "./routes/OrdersPage/OrdersPage.jsx";

//Aqui se definiran las rutas, indicando el path y el comoponente(element: que se va a renderizar)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/detalle/:id",
        element: <DetalleProducto />,
      },
    ],
  },

  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/productos/",
    element: <AllProducts />,
    children: [
      {
        path: "/productos/detalle/:id",
        element: <DetalleProducto />,
      },
    ],
  },
  {
    path: "/productos/:category",
    element: <ProductCategory />,
    children: [
      {
        path: "/productos/:category/detalle/:id",
        element: <DetalleProducto />,
      },
    ],
  },

  {
    path: "/registro",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/add",
    element: <AddProduct />,
  },
  {
    path: "/adminPanel",
    element: <PanelAdmin />,
  },
  {
    path: "/adminPanel/orders",
    element: <OrdersPage />,
  },
  {
    path: "/User",
    element: <User />,
  },

  {
    path: "/UserEdit",
    element: <UserEdit />,
  },

  {
    path: "/HeroLogged",
    element: <HeroLogged />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
