import "./Hero.css";
import "../../index.css";
import ScrollReveal from 'scrollreveal'

const HeroSection = () => {

  const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true

  })

sr.reveal('.hero-text', {delay: 200, origin: 'top'})
sr.reveal('.hero-img', {delay: 450, origin: 'top'})
sr.reveal('.scroll-down', {delay: 500, origin: 'right'})

  return (
    <>
      <section className="hero">
        <div className="hero-text">
       
          <h1>Promo del Dia</h1>
          <h5>Hamburguesa doble especial</h5>
          <p>
            Explora nuestra variedad culinaria, desde la textura crujiente del
            pollo hasta la sazón única de nuestras hamburguesas y la mezcla
            perfecta de ingredientes en nuestras pizzas recién horneadas.
            ¡Satisface todos tus antojos en un solo lugar!
          </p>
          <a href="/" className="menu">
            <img height="16" width="16" src="svg/menu.svg" />
            Nuestro menu
          </a>
        </div>
        <div className="hero-img">
          <img src="img/cangrejo.png" alt="burguer" />
        </div>
      </section>
      <div className="scroll-down">
        <a href="#"><img src="svg/ArrowDown.svg" alt="down-arrow" /></a>
      </div>
    </>
  );
};

export default HeroSection;