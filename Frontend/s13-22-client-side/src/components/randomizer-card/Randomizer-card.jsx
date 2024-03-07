import "./Randomizer-card.css";

import menuData from "../../data/menuData";
import { useGlobalContext } from "../../context";

const RandomizerCard = () => {
  const { addToCart } = useGlobalContext();

  const promoItem = menuData.filter((item) => item.promo);

  return (
    <>
      {promoItem.map((item) => (
        <>
          <div className="container-random">
            <br />
            <h2 className="title-random">Estas listo para ordenar algo</h2>

            <div className="parrafo_random">
              {" "}
              ¿Te gusta nuestros productos? pensamos que esta oferta puede ser
              de tu agrado
            </div>

            <div className="contenedor_grid">
              <div className="imagen_random">
                <img src={item.img} alt="" />
              </div>
            </div>
            <div>
              {" "}
              <h3 className="texto_random float">{item.name}</h3>
              <h3 className="texto_random">${item.price.toFixed(2)}</h3>
            </div>

            <div className="bottons">
              <p>{item.desc}</p>
              <div className="marggi-l">
                {" "}
                <div
                  className="icon-bgd "
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  <a
                    className="menu"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    <img height="16" width="16" src="../svg/cart.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default RandomizerCard;
