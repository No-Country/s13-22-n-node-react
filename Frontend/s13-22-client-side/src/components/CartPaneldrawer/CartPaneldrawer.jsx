import { useState } from 'react';
import { Drawer } from 'antd';
import '../CartPaneldrawer/CartPaneldrawer.css';
import { useGlobalContext } from '../../context';
import Cookies from 'js-cookie';
import { EscalatorTwoTone } from '@mui/icons-material';

const CartPaneldrawer = () => {
  const { cart, setCart, total, setTotal, addOne } = useGlobalContext();
  let currentUserId = Cookies.get('userId');
  let currentToken = Cookies.get('token');

  const [userId, setUserId] = useState(currentUserId);
  const [token, setToken] = useState(currentToken);
  const [orderNumber, setOrderNumber] = useState('40978764-471c-4aff-8656-440a84b1d16b');
  const [totalOrder, setTotalOrder] = useState(total);
  const [items, setItems] = useState({});

  console.log(`Cart:`, cart);
  console.log(`useerId:`, userId, `Token:`, token);

  // Trabajando en esto, al parecer el CORS blockea la request, una vez que se solucione el cors limpiare el codigo :3
  const submitOrder = async () => {
    const data = {
      "userId": userId,
      "order_number": orderNumber,
      "total": total,
      "items": [...cart]
    }
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://hungry-time-dev.onrender.com/api/v1/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      if(response.ok){
        console.log(`all good!`);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(`Error al enviar orden:`, error);
    }
  }

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
    itemRemove.amount = 1;
    setTotal(updatedTotal);
    let updatedCart = cart.filter(item => item !== itemRemove);
    setCart(updatedCart);
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
                src="../../../svg/cart.svg"
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
                  <section key={item.id} className='food-info-section'>
                    <div className='food-info'>
                      <p className='food-info-name'>{item.name}</p>
                      <p className='food-info-price'>${item.price}</p>
                    </div>
                    <div className='food-info-buttons'>
                      <div className='amount-div'>
                        <button onClick={() => addOne(item)}>➕</button>
                        <p className='amount-info'>{item.amount}</p>
                        <button onClick={() => removeOne(item)}>➖</button>
                      </div>
                      <div className='remove-div'>
                        <button onClick={() => removeFromCart(item)}>REMOVER</button>
                      </div>
                    </div>
                  </section>
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
            <button onClick={() => {submitOrder()}}>Checkout</button>
            <button onClick={() => clearCart()}>Clear Cart</button>
          </div>
        </section>
      </Drawer>
    </>
  );
};
export default CartPaneldrawer;