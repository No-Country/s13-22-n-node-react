import  { useState } from 'react';
import '../MenuMain/Menu.css';
import menuData from '../../data/menuData';
import FoodCard from '../FoodCard/FoodCard';
import { Link } from 'react-router-dom';

function Menu() {
    const [menu, setMenu] = useState(menuData);

    // Función para obtener categorías únicas
    const uniqueCategories = [...new Set(menu.map(item => item.category))];

    return (
        <section className='menu-section'>
            {/* Mapeo de cada categoría */}
            {uniqueCategories.map(category => (
                <>
                    <div key={category} className='type-name-container'>
                        <h4 className='food-name' id={category}>{category}</h4>
                        <Link to="/" className="more__container">
                        <p className='seeMore'>Ver más</p>
                        <img src="/svg/arrowIcon.svg" alt="" />
                        </Link>

                    </div>
                    <div className='cards-container'>
                        {/* Filtrar elementos del menú por categoría */}
                        {menu.filter(item => item.category === category).splice(0, 4).map(filteredItem => (
                            <FoodCard key={filteredItem.id} item={filteredItem} />
                            ))}
                    </div>
            </>
            ))}
        </section>
    );
}

export default Menu;
