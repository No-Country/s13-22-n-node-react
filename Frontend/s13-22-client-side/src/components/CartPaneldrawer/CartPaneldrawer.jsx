import { useState } from 'react';
import { Button, Drawer } from 'antd';

const CartPaneldrawer = ({ cart, total, setCart, setTotal }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const removeFromCart = (itemRemove) => {
    let updatedTotal = parseFloat(total - itemRemove.price);
    setTotal(updatedTotal);
    let updatedCart = cart.filter(item => item !== itemRemove);
    console.log(updatedCart);
    setCart(updatedCart);
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
          cart.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item)}>❌</button>
              </div>
            )
          })
        }
        <hr/>
        <p>Total: ${total.toFixed(2)}</p>
      <button>Checkout</button>
      </Drawer>
    </>
  );
};
export default CartPaneldrawer;