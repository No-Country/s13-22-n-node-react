import React, { useState, useContext, useEffect } from 'react';
import ordersData from './data/ordersData';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [hello, setHello] = useState('hello');
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    // Ordenes data
    const [orders, setOrders] = useState(ordersData);
    const [pending, setPending] = useState([]);

    
    const addToCart = (item) => {
        let updatedTotal = parseFloat(total + item.price);
        setTotal(updatedTotal);
        const inTheCart = cart.includes(item);
        if(inTheCart){
            addOne(item);
        } else {
            setCart([...cart, item]);
        }
    }
    
    const addOne = (item) => {
        item.amount = item.amount + 1;
        let updatedTotal = parseFloat(total + item.price);
        setTotal(updatedTotal);
    }

    // const ordenLista = (order) => {
    //     const updatedOrders = pending.map((item) => {
    //         if (item.id === order.id) {
    //             item.state = "completed";
    //         }
    //         return item;
    //     }) 
    //     setPending(updatedOrders);
    // }
    const [productos, setProductos] = useState([]);

    const getProducts = () => {
        const request = async () => {
            const req = await fetch(`https://hungry-time-dev.onrender.com/api/v1/products?limit=10&offset=1`);
            const res = await req.json();
            console.log(`Response:`, res);
            setProductos(res);
        }
        request();
    }
    
    
    useEffect(() => {
        const switchOn = () => {
            let pendingOrders = orders.filter((order) => order.state === 'pending');
            setPending(pendingOrders);
        }
        switchOn();
        getProducts();
    }, [orders, setPending]);

  return (
    <AppContext.Provider
        value={{ 
            hello,
            cart,
            setCart,
            total, 
            setTotal,
            addToCart,
            addOne,
            pending,
            setPending,
            orders,
            // ordenLista,
            productos,
            }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };