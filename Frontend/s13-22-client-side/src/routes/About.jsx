import { Link } from "react-router-dom"



export const About = ()=>{
    return(
        <div className="container__about">
        <h1>Acerca de Nosotros</h1>
        <p >Aquí hemos navegado a la ruta  &quot;/about.&quot;. esta rota fue definida en main.jsx </p>

        <Link className="about__btn--back" to="/"  >
            volver
        </Link>
        </div>
    )
}