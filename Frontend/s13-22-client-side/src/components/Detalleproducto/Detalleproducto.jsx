import { useParams, useNavigate } from "react-router-dom";
import menuData from "../../data/menuData";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../../context";
export const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Obtiene la función navigate
  const { addToCart } = useGlobalContext();
  const producto = menuData.find((producto) => producto.id === id);

  if (!producto) {
    return <> </>;
  }
  const handleClose = () => {
    // Cierra el popup y elimina "detalle/:id" de los parámetros de la URL
    navigate(-1); // Navega hacia atrás en el historial, eliminando el último segmento de la URL
  };

  return (
    <>
      <div className="popup__card is-open">
        <article className="card__item">
          <CloseIcon onClick={handleClose} />
         <div className="detalle__container">
         <div className="detalle__text__container">
         <h1>{producto.name}</h1>
          <p className="desc_producto">{producto.desc}</p>
         </div>
          <div className="contenedor_producto__img">
            <img
              className="producto__img"
              src={producto.img}
              alt={producto.name}
            />
             <div className="price-and-boton">
            <h3>{producto.price.toFixed(2)}</h3>
            <div className="bag__icon--container price">
              <div
                className="icon-bgd"
                onClick={() => {
                  addToCart(producto);
                }}
              >
                <img
                  className="cart__icon "
                  src="../../../svg/cart.svg"
                />
              </div>
            </div>
          </div>
          </div>

         </div>

        </article>
      </div>
    </>
  );
};
