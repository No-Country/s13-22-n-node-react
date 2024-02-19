import { useEffect } from "react";
import "./Header.css";
import { HeaderLogin } from "../HeaderLogin/HeaderLoginIcon";
import { NotLoggedIn } from "../NotLoggedIn/NotLoggedIn";

import CartPaneldrawer from "../CartPaneldrawer/CartPaneldrawer";

let userStatus = false;

export const Header = ({ links }) => {
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

            <h3 className="header__logo">HungryTime</h3>
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
                  {userStatus ? <HeaderLogin/> : <NotLoggedIn/>}
            <CartPaneldrawer/>
          </div>


        </div>
      </header>
    </>
  );
};
