import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import menuData from "../../data/menuData";
import CloseIcon from "@mui/icons-material/Close";

export const DetalleProducto = () => {

  const { id } = useParams();
  const producto = menuData.find((producto) => producto.id === id);



  if (!producto) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <>
    <div className="popup__card is-open">

      <article className="card__item">
        <CloseIcon  />

        <h1>{producto.name}</h1>
        <p>{producto.desc}</p>
        <img src={producto.img} alt={producto.name} />
        <h3>{producto.price.toFixed(2)}</h3>
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
      </article>
       </div>

    </>
  );
};


/*  */