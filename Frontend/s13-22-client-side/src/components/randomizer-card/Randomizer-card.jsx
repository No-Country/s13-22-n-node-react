import img_random from "../../../public/img/About Bg.png";
import "./Randomizer-card.css";
import { Link } from "react-router-dom";

const RandomizerCard = () => {
  return (
    <>
      <div className="container-random">
        <br />
        <h2 className="title-random">Estas listo para ordenar algo</h2>

        <div className="parrafo_random">
          {" "}
          ¿Te gusta nuestros productos? pensamos que este producto puede ser de
          tu gusto
        </div>

        <div className="contenedor_grid">
          <div className="imagen_random">
            <img src={img_random} alt="" />
          </div>
        </div>
        <div>
          {" "}
          <h3 className="texto_random float">Doble especial</h3>
          <h3 className="texto_random">300.00$</h3>
        </div>

        <div className="bottons">
          <Link to={`detalle/pizza`} className="btn__detalles">
            Detalles
          </Link>
          <div
            className="icon-bgd marggi-l"
            onClick={() => {
              addToCart(item);
            }}
          >
            <img className="cart__icon" src="../../../public/svg/cart.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomizerCard;
