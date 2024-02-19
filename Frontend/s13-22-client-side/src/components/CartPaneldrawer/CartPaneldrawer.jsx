import { useState } from 'react';
import { Button, Drawer } from 'antd';
const CartPaneldrawer = () => {
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
                src="../../../public/svg/cart.svg"
                alt="Cart"
              />
      </div>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Hamburguesa Doble</p>
        <p>Hamburguesa con queso</p>
        <p>Hamburguesa Premium</p>
      <button>Checkout</button>
      </Drawer>
    </>
  );
};
export default CartPaneldrawer;