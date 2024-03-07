import "./FloatingIcons.css"
import fries from "../../../public/img/friesIcon.png";
import burger from "../../../public/img/burgerIcon.png";
import soda from "../../../public/img/sodaIcon.png";
import pizza from "../../../public/img/pizzaIcon.png";
export const FloatingIcons = ()=>{
    return (
        <div className="icons__container">
                <img className="icon icon--burger" src={burger} alt="Burger"/>
                <img className="icon icon--pizza" src={pizza} alt="Pizza"/>
                <img className="icon icon--fries" src={fries} alt="Fries"/>
                <img className="icon icon--drink" src={soda} alt="Drink"/>
            </div>
    )
}