import { Outlet, Link } from "react-router-dom";


export default function Root() {
/* Root es el app.jsx para react router dom  */
    return (
      <>
        <div id="sidebar">
          <div>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/contacts/id=1`}>gato Sofi</Link>
              </li>
              <li>
                <Link to={`/contacts/id=2`}>Gato Dev</Link>
              </li>
              <li>
                <Link to={`/about`}>about</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <h1>Componentes aquí</h1>

            <Outlet/>
            <p>Las rutas anidadas se renderizan en el mismo  componente padre. en este caso Home, con la ruta raiz(root) agregando un slash a la ruta y, en este caso, un id: /contacts/id=1</p>
            <p>Las rutas se crean en /main.jsx</p>
        </div>
      </>
    );
  }