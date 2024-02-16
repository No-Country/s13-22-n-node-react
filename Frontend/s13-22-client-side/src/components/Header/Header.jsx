
export const Header = ()=>{
    return(
        <>
        <header class="header">
        <div class="header__container">
            <button class="hamburger hamburger--spring
            " type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            <div class="logo__nav">
                <h3 class="header__logo">HungryTime</h3>
                <nav class="header__menu ">
                    <ul class="menu__list panel">
                        <li class="menu__item"><a href="#" class="menu__link">Hamburguesas</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Pizza</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Pollo</a></li>
                        <li class="menu__item"><a href="#about" class="menu__link">Acerca</a></li>
                    </ul>
                </nav>
            </div>
            <div class="header__icons">
                <a href="#"><img class="icon__img--login" src="../../../public/svg/Login.svg" alt="Login"/></a>
                <a href="#"><img class="icon__img--cart" src="../../../public/svg/cart.svg" alt="Cart"/></a>
            </div>
        </div>
    </header>

        </>
    )
}