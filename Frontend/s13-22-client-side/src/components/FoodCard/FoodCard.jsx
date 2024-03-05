import React from "react";
import "../FoodCard/FoodCard.css";
import { Link } from "react-router-dom";
import { DetalleProducto } from "../Detalleproducto/Detalleproducto";


// Work in progress :3
function FoodCard({ item, addToCart }) {

  let { name, price, img, id } = item;

  return (
    <>
      <div className="food-card ">
        <div className="caraA ">
          <img className="food__image" src={img} ></img>
          <div className="food-info-container">
            <div className="food-about">
              <p>{name}</p>
              <p>${price}</p>
            </div>
            <div className="bag__icon--container">
              <div
                className="icon-bgd"
                onClick={() => {
                  addToCart(item);
                }}
              >
                <img
                  className="cart__icon"
                  src="../../../public/svg/cart.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="caraB btn__container">
          <Link
          to={`detalle/${id}`} className="btn__detalles">Detalles</Link>
        </div>
      </div>

      <DetalleProducto />
    </>
  );
}

export default FoodCard;
