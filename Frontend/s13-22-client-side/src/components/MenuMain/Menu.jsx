import React from 'react'
import '../MenuMain/Menu.css'

function Menu() {
  return (
    <section className='menu-section'>
        <section className='food-type-container'>
            <div className='type-name-container'>
                <p className='food-name'>Hamburguesas</p>
                <p className='seeMore'>Ver mas...</p>
            </div>
            <div className='cards-container'>
                <div className='food-card'>
                    <div className='food-img-container'>
                        <img src="../../../public/img/hamburguerPic.png" height="90%" width="70%"></img>
                    </div>
                    <div className='food-info-container'>
                        <div className='food-about'>
                            <p>Nombre Comida</p>
                            <p>$Precio.00</p>
                        </div>
                        <div className='bag-icoon-container'>
                            <div className='icon-bgd'>
                                <img src="../../../public/img/shoppingBag.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='food-card'>
                    <div className='food-img-container'>
                        <img src="../../../public/img/hamburguerPic.png" height="90%" width="70%"></img>
                    </div>
                    <div className='food-info-container'>
                        <div className='food-about'>
                            <p>Nombre Comida</p>
                            <p>$Precio.00</p>
                        </div>
                        <div className='bag-icoon-container'>
                            <div className='icon-bgd'>
                                <img src="../../../public/img/shoppingBag.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* hi */}
          <section className='food-type-container'>
              <div className='type-name-container'>
                  <p className='food-name'>Hamburguesas</p>
                  <p className='seeMore'>Ver mas...</p>
              </div>
              <div className='cards-container'>
                  <div className='food-card'>
                      <div className='food-img-container'>
                          <img src="../../../public/img/hamburguerPic.png" height="90%" width="70%"></img>
                      </div>
                      <div className='food-info-container'>
                          <div className='food-about'>
                              <p>Nombre Comida</p>
                              <p>$Precio.00</p>
                          </div>
                          <div className='bag-icoon-container'>
                              <div className='icon-bgd'>
                                  <img src="../../../public/img/shoppingBag.png" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='food-card'>
                      <div className='food-img-container'>
                          <img src="../../../public/img/hamburguerPic.png" height="90%" width="70%"></img>
                      </div>
                      <div className='food-info-container'>
                          <div className='food-about'>
                              <p>Nombre Comida</p>
                              <p>$Precio.00</p>
                          </div>
                          <div className='bag-icoon-container'>
                              <div className='icon-bgd'>
                                  <img src="../../../public/img/shoppingBag.png" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </section>
  )
}

export default Menu