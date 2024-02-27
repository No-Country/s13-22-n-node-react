import { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import '../CartPaneldrawer/CartPaneldrawer.css';
import CartItem from '../CartItem/CartItem';

const CartPaneldrawer = ({ cart, total, setCart, setTotal }) => {

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // Cart Funcionality: AUN HAY MEJORAS POR HACER, PERO NECESITO MAS INFO POR EL MOMENTO :3
  const removeFromCart = (itemRemove) => {
    let updatedTotal = parseFloat(total - (itemRemove.price * itemRemove.amount));
    setTotal(updatedTotal);
    let updatedCart = cart.filter(item => item !== itemRemove);
    setCart(updatedCart);
  }

  const addOne = (item) => {
    item.amount = item.amount + 1;
    let updatedTotal = parseFloat(total + item.price);
    setTotal(updatedTotal);
  }

  const removeOne = (item) => {
    item.amount = item.amount - 1;
    if (item.amount <= 0) {
      removeFromCart(item);
      item.amount = 1;
    }
    let updatedTotal = parseFloat(total - item.price);
    setTotal(updatedTotal);
  }

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  }

  return (
    <>
      <div type="primary" onClick={showDrawer}>
              <img
                className="icon__img--cart"
                src="svg/cart.svg"
                alt="Cart"
              />
      </div>
      <Drawer title="Orden" onClose={onClose} open={open}>
        {
          cart.length === 0 ? 
            <div className='empty-cart-msg'>
              <p>No items!</p>
            </div> : (
              cart.map((item) => {
                return (
                  <CartItem key={item.id} item={item} addOne={addOne} removeOne={removeOne} clearCart={clearCart} removeFromCart={removeFromCart} />
                )
              })
          )
        }
        <hr/>
        <section className='total-section'>
          <div className='total-div'>
            <p className='total-cart'>Total: ${total.toFixed(2)}</p>
          </div>
          <div className='total-buttons'>
            <button>Checkout</button>
            <button onClick={() => clearCart()}>Clear Cart</button>
          </div>
        </section>
      </Drawer>
    </>
  );
};
export default CartPaneldrawer;