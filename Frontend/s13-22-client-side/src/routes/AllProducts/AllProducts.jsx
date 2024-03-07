import {  useState } from 'react';
import { Header } from "../../components/Header/Header";
import menuData from "../../data/menuData";
import { useGlobalContext } from "../../context";
import FoodCard from "../../components/FoodCard/FoodCard";
import "./AllProducts.css"

export const AllProducts = () => {
  const { cart, setCart, total, setTotal, addToCart } = useGlobalContext();

  const [menu, setMenu] = useState(menuData);

    return (
        <>
            <Header allProducts={true}/>
            <section className='menu-section'>
                    <div className='cards-container'>
                        {menu.map(cardMenu => (
                            <FoodCard key={cardMenu.id} item={cardMenu} setCart={setCart} addToCart={addToCart} />
                        ))}
                    </div>
        </section>
        </>
    )
};
