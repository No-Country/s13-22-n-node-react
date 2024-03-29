import React, { useEffect, useState } from 'react';
import menuData from '../../data/menuData';
import { useParams } from 'react-router-dom';
import FoodCard from '../../components/FoodCard/FoodCard';
import '../../routes/AllProducts/ProductCategory.css';
import { useGlobalContext } from '../../context';
import { Header } from '../../components/Header/Header';

const ProductCategory = () => {
    const { addToCart } = useGlobalContext();
    const [data, setData] = useState(null);
    const { category } = useParams();

    useEffect(() => {
        async function getFoodCategory() {
            if (!menuData) return;
            const categoria = await menuData.filter((item) => item.category === category);
            setData(categoria);
        }
        getFoodCategory();
    }, [category]);

    console.log(data);

    return (
        <>
            <Header />
            <section className='category-section'>
                <div>
                    {
                        data ? (
                            <section className='secttion__products'>
                                <div className='title-category-div'>
                                    <h1>{category}</h1>
                                </div>
                                <div className='category-div'>
                                    {
                                        data.map((item) => {
                                            return (
                                                <FoodCard key={item.id} item={item} addToCart={addToCart} />
                                            )
                                        })
                                    }
                                </div>
                            </section>
                        ) : (
                            <p>No {category} disponibles en este</p>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default ProductCategory;
