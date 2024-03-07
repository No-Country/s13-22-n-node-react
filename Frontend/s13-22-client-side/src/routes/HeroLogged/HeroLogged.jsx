import "./HeroLogged.css";
import "../../index.css";
import menuData from "../../data/menuData";
import ScrollReveal from "scrollreveal";
import burger from "../../../public/img/burgerIcon.png";

export const HeroLogged = () => {
  const sr = ScrollReveal({
    distance: "65px",
    duration: 2600,
    delay: 450,
    reset: true,
  });

  sr.reveal(".hero__container", { delay: 200, origin: "bottom" });
  sr.reveal(".hero-img", { delay: 450, origin: "top" });
  sr.reveal(".scroll-down", { delay: 500, origin: "right" });

  const promoItem = menuData.filter((item) => item.promo);

  return (
    <>
      <section className="hero_logged">
        {promoItem.map((item) => (
          <>
            <div className="hero_logged__container">
              <div className="hero_logged-text">
                <h1>
                  Bienvenido <span>{item.name}</span>
                </h1>

                <p>un estomago lleno en un corazon contento</p>

                <div className="buscador_section">
                  <h2>Que deseas comer hoy</h2>
                  <div className="separador" />

                  <div className="buscador_container">
                    <form action="">
                      {" "}
                      <input className="buscador" placeholder="Comida" />
                      <input
                        className="botton-buscar"
                        type="submit"
                        value="Buscar"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="hero_logged-img">
                <div className="img__hero_logged_container">
                  <img className="icon" src={burger} />
                </div>
              </div>
            </div>
          </>
        ))}
      </section>
      <div className="scroll-down">
        <a href="#about">
          <img src="../svg/ArrowDown.svg" alt="down-arrow" />
        </a>
      </div>
    </>
  );
};

export default HeroLogged;
