import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Header.css";
import { HeaderLogin } from "../HeaderLogin/HeaderLoginIcon";
import CartPaneldrawer from "../CartPaneldrawer/CartPaneldrawer";
import Cookies from "js-cookie";

const login = [
  { desc: "Profile", link: "/team" },
  { desc: "Account", link: "/" },
  { desc: "Dashboard", link: "#" },
  { desc: "Logout", link: "" },
];

const logOff = [
  { desc: "Iniciar Sesión", link: "/login" },
  { desc: "Crear Cuenta", link: "/registro" },
];
export const Header = ({ isAdminPage, allProducts }) => {
  const {  category } = useParams();
  const [userStatus, setUserStatus] = useState(false);

  useEffect(() => {
    // Verificar si la cookie "token" existe
    const token = Cookies.get("token");
    if (token) {
      setUserStatus(true);
    } else {
      setUserStatus(false);
    }
  }, []);

  const linksCategories = [
    { text: "Todos", url: "/productos/" },
    { text: "Hamburguesas", url: "/productos/Hamburguesas" },
    { text: "Pizza", url: "/productos/Pizza" },
    { text: "Pollo", url: "/productos/Pollo" },
    { text: "Complementos", url: "/productos/Complementos" },
  ];

  const links = [
    { text: "Hamburguesas", url: "#Hamburguesas" },
    { text: "Pizza", url: "#Pizza" },
    { text: "Pollo", url: "#Pollo" },
    { text: "Acerca", url: "/#about" },
  ];

  const linksAdmin = [
    { text: "Usuarios", url: "#usuarios" },
    { text: "Status Pedidos", url: "#status" },
    { text: "Productos", url: "#ver-productos" },
  ];

  return (
    <>
      <header className="header">
        <div className="header__container">
          <button
            className="hamburger hamburger--spring panel-btn"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <a href="/#">
            <h3 className="header__logo">HungryTime</h3>
          </a>

          <nav className="header__menu panel">
            <ul className="menu__list">

              {(  allProducts || category) ? (
                 !isAdminPage  && linksCategories.map((link, index) => (
                  <li className="menu__item" key={index.text}>
                    <Link to={link.url} className="menu__link">
                      {link.text}
                    </Link>
                  </li>
                ))
              ) : (
                // Mostrar links si no hay categoría en la URL y no estamos en la página de productos
                !isAdminPage && links.map((link, index) => (
                  <li className="menu__item" key={index.text}>
                    <a href={link.url} className="menu__link">
                      {link.text}
                    </a>
                  </li>
                ))
              )}
              {isAdminPage && linksAdmin.map((link, index) => (
                <li className="menu__item" key={index.text}>
                  <Link to={link.url} className="menu__link">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__icons">
            {userStatus ? (
              <HeaderLogin settings={login} setUserStatus={setUserStatus} />
            ) : (
              <HeaderLogin settings={logOff} setUserStatus={setUserStatus} />
            )}
            <CartPaneldrawer />
          </div>
        </div>
      </header>
    </>
  );
};
