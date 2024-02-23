import { useState } from 'react';
import { Button, Drawer } from 'antd';

const CartPaneldrawer = ({ cart, total }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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