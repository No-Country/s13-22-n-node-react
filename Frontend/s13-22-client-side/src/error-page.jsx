import { Link } from "react-router-dom"
const ErrorPage = ()=>{
    return (
        <>
        <h1>Paagina no encontrada</h1>
        <Link to="/">
            Volver
        </Link>
        </>
    )
}
export default ErrorPage;