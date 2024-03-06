import "./Hero.css";
import "../../index.css";
import menuData from "../../data/menuData";
import ScrollReveal from "scrollreveal";
import { useGlobalContext } from "../../context";

const HeroSection = () => {
  const sr = ScrollReveal({
    distance: "65px",
    duration: 2600,
    delay: 450,
    reset: true,
  });

  const { addToCart } = useGlobalContext();

  sr.reveal(".hero__container", { delay: 200, origin: "bottom" });
  sr.reveal(".hero-img", { delay: 450, origin: "top" });
  sr.reveal(".scroll-down", { delay: 500, origin: "right" });

  const promoItem = menuData.filter((item) => item.promo);

  return (
    <>
      <section className="hero">
        {promoItem.map((item) => (
          <>
          <div className="hero__container">
            <div className="hero-text">
              <h1>Promo del Dia</h1>
              <h5>{item.name}</h5>
              <p>{item.desc}</p>
              <a className="menu" onClick={() => {addToCart(item)}}>
                <img height="16" width="16" src="../svg/cart.svg" />
                Agregar al carrito
              </a>
            </div>
            <div className="hero-img">
              <div className="img__container">
              <img src={item.img} alt="burguer" />
              </div>

              <h4>${item.price.toFixed(2) }</h4>
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

export default HeroSection;