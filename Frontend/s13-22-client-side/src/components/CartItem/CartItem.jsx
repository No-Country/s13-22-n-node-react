import React from 'react';
import '../CartItem/CartItem.css';

function CartItem({ item, addOne, removeOne, removeFromCart }) {
    const { id, name, price, amount } = item;

  return (
      <section key={id} className='food-info-section'>
          <div className='food-info'>
              <p className='food-info-name'>{name}</p>
              <p className='food-info-price'>${price}</p>
          </div>
          <div className='food-info-buttons'>
              <div className='amount-div'>
                  <button onClick={() => addOne(item)}>➕</button>
                  <p className='amount-info'>{amount}</p>
                  <button onClick={() => removeOne(item)}>➖</button>
              </div>
              <div className='remove-div'>
                  <button onClick={() => removeFromCart(item)}>REMOVER</button>
              </div>
          </div>
      </section>
  )
}

export default CartItem