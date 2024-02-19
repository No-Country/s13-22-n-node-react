import React, { useState } from 'react'
import '../MenuMain/Menu.css'
import menuData from '../../data/menuData'
import FoodCard from '../FoodCard/FoodCard';

function Menu() {
    const [menu, setMenu] = useState(menuData);
    console.log(menu);

  return (
    <section className='menu-section'>
        <section className='food-type-container'>
            <div className='type-name-container'>
                <p className='food-name'>Hamburguesas</p>
                <p className='seeMore'>Ver mas...</p>
            </div>
            <div className='cards-container'>
                <div className='cards-container'>
                    {
                        menu.map((item) => {
                            return (
                                <FoodCard key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
        <section className='food-type-container'>
            <div className='type-name-container'>
                <p className='food-name'>Pizza :3</p>
                <p className='seeMore'>Ver mas...</p>
            </div>
            <div className='cards-container'>
                <div className='cards-container'>
                    {
                        menu.map((item) => {
                            return (
                                <FoodCard key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </section>
  )
}

export default Menu