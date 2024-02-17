import React from 'react'
import '../FoodCard/FoodCard.css'


// Work in progress :3
function FoodCard({ item }) {
    let { name, price } = item;
  
    return (
      <div className='food-card'>
          <div className='food-img-container'>
              <img src="../../../public/img/hamburguerPic.png" height="90%" width="70%"></img>
          </div>
          <div className='food-info-container'>
              <div className='food-about'>
                  <p>{name}</p>
                  <p>${price}</p>
              </div>
              <div className='bag-icoon-container'>
                  <div className='icon-bgd'>
                      <img src="../../../public/img/shoppingBag.png" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default FoodCard