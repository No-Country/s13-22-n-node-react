import { Link } from "react-router-dom";
import "./error-page.css";
const ErrorPage = () => {
  return (
    <>
      <div className="error-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="error-text">
                <h1 className="error-titulo">404 Error</h1>
                <div className="im-sheep">
                  <div className="top">
                    <div className="body"></div>
                    <div className="head">
                      <div className="im-eye one"></div>
                      <div className="im-eye two"></div>
                      <div className="im-ear one"></div>
                      <div className="im-ear two"></div>
                    </div>
                  </div>
                  <div className="im-legs">
                    <div className="im-leg"></div>
                    <div className="im-leg"></div>
                    <div className="im-leg"></div>
                    <div className="im-leg"></div>
                  </div>
                </div>
                <h3>Oops! La pagina no pudo ser encontrada!</h3>
                <p>Pagina en construccion por favor, le pedimos que regrese.</p>

                <Link className="btn-error btn-primary btn-round" to="/">
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
