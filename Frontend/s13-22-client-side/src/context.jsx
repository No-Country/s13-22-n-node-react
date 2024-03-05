import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [hello, setHello] = useState('hello');
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (item) => {
        let updatedTotal = parseFloat(total + item.price);
        setTotal(updatedTotal);
        setCart([...cart, item]);
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
            }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };