import { useEffect } from "react";
import "./Header.css";
export const Header = () => {
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
            className="hamburger hamburger--spring panel-btn
            "
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className="logo__nav">
            <h3 className="header__logo">HungryTime</h3>
            <nav className="header__menu panel">
              <ul className="menu__list ">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Hamburguesas
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Pizza
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Pollo
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#about" className="menu__link">
                    Acerca
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__icons">
            <a href="#">
              <img
                className="icon__img--login"
                src="../../../public/svg/Login.svg"
                alt="Login"
              />
            </a>
            <a href="#">
              <img
                className="icon__img--cart"
                src="../../../public/svg/cart.svg"
                alt="Cart"
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
