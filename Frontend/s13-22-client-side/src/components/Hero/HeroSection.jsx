import "./Hero.css";
import "../../index.css";

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h5>Hamburguesa doble especial</h5>
          <h1>Promo del Dia</h1>
          <p>
            Explora nuestra variedad culinaria, desde la textura crujiente del
            pollo hasta la sazón única de nuestras hamburguesas y la mezcla
            perfecta de ingredientes en nuestras pizzas recién horneadas.
            ¡Satisface todos tus antojos en un solo lugar!
          </p>
          <a href="/">
            <img height="16" width="16" src="svg/menu.svg" />
            Nuestro menu
          </a>
        </div>
        <div className="hero-img">
          <img src="img/cangrejo.png" alt="burguer" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;