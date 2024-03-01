import "./CardDetail.css";
import "../Hero/Hero.css";

export const CardDetail = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid">
          <div>
            <img alt="" src="/img/pizza.png" />
          </div>

          <div>
            <h2>Se te antoja una </h2>
            <h4 >Pizza?</h4>

            <p>
              ¡Ven con un amigo y disfruta de una deliciosa pizza
              caliente y crujiente! Descubre el placer de compartir momentos
              especiales con nuestras mejores ofertas. ¡No te pierdas esta
              oportunidad para deleitar tu paladar y pasar un rato increíble!
            </p>

            <a href="/" className="menu">
              <img height="16" width="16" src="svg/menu.svg" />
              Agregar al carrito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
