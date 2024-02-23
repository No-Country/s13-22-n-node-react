import "./Hero.css";
import "../../index.css";
import menuData from "../../data/menuData";
import ScrollReveal from "scrollreveal";

const HeroSection = () => {
  const sr = ScrollReveal({
    distance: "65px",
    duration: 2600,
    delay: 450,
    reset: true,
  });

  sr.reveal(".hero-text", { delay: 200, origin: "top" });
  sr.reveal(".hero-img", { delay: 450, origin: "top" });
  sr.reveal(".scroll-down", { delay: 500, origin: "right" });

  const promoItem = menuData.filter((item) => item.promo);

  return (
    <>
      <section className="hero">
        {promoItem.map((item) => (
          <>
            <div className="hero-text">
              <h1>Promo del Dia</h1>
              <h5>{item.desc}</h5>
              <a href="/" className="menu">
                <img height="16" width="16" src="svg/menu.svg" />
                Agregar al carrito
              </a>
            </div>
            <div className="hero-img">
              <img src={item.img} alt="burguer" />
              <h4>${item.price}</h4>
            </div>
          </>
        ))}
      </section>
      <div className="scroll-down">
        <a href="#about">
          <img src="svg/ArrowDown.svg" alt="down-arrow" />
        </a>
      </div>
    </>
  );
};

export default HeroSection;