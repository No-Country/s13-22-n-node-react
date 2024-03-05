import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [hello, setHello] = useState('hello');
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

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
            }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };