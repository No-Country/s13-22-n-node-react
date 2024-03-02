import { useEffect, useState } from "react";
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
  { desc: "Inciar Sesión", link: "/login" },
  { desc: "Crear Cuenta", link: "/registro" },
];

export const Header = ({ links, cart, total, setCart, setTotal }) => {
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
  useEffect(() => {
    const handleClick = (e) => {
      const panel = document.querySelector(".panel");
      const panelBtn = document.querySelector(".panel-btn");

      if (e.target.matches(".panel-btn") || e.target.matches(".panel-btn *")) {
        panel.classList.toggle("is-active");
        panelBtn.classList.toggle("is-active");
      }

      if (e.target.matches(".menu__link")) {
        panel.classList.remove("is-active");
        panelBtn.classList.remove("is-active");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

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
          <a href="#">
            <h3 className="header__logo">HungryTime</h3>
          </a>

          <nav className="header__menu panel">
            <ul className="menu__list">
              {links.map((link, index) => (
                <li className="menu__item" key={index}>
                  <a href={link.url} className="menu__link">
                    {link.text}
                  </a>
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
            <CartPaneldrawer
              cart={cart}
              total={total}
              setCart={setCart}
              setTotal={setTotal}
            />
          </div>
        </div>
      </header>
    </>
  );
};
