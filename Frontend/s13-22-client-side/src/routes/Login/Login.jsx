import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink as Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import "./Login.css";
import potato from "../../../public/img/potato.png";
import burger from "../../../public/img/burgerIcon.png";
import cola from "../../../public/img/cola.png";
import pizza from "../../../public/img/pizza.png";
// import { GoogleOAuthProvider } from "@react-oauth/google";

export const Login = () => {
  // const clientID =
  //   "905887041407-6eucaojg860q7eq0q24panni0g9jitln.apps.googleusercontent.com";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `https://hungy-time.onrender.com/api/v1/auth/login`,
        data
      );

      const token = response.data.token;

      // Establece la cookie con el token
      setTokenInCookie(token);

      // Redirige al dashboard después del login exitoso
      navigate("/welcome");
    } catch (error) {
      console.error("Error en la solicitud:", error.message);

      if (
        (error.response && error.response.status === 403) ||
        error.response.status === 401
      ) {
        setErrorMessage(
          "Contraseña incorrecta. Por favor, inténtalo de nuevo."
        );
      } else {
        setErrorMessage("");
      }
    }
  };

  const setTokenInCookie = (token) => {
    // Establece la cookie con el token
    Cookies.set("token", token, { expires: 7 }); // Caduca en 7 días

    // Agrega un mensaje de log para verificar
    console.log("Cookie establecida correctamente:", token);
  };

  return (
    <>
      <div className="body-of-page">
        <div className="body-login">
          <div className="imagenes-container">
            <img className="burger anim-float" src={burger} />
            <img className="pizza anim-float" src={pizza} />
            <img className="potato anim-float" src={potato} />
            <img className="cola anim-float" src={cola} />
          </div>
          <div className="login-container">
            <h2 className="title">Iniciar sesión</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* correo */}
              <div className="text-area">
                <label className="label-login">Correo</label>
                <br />
                <input
                  className="text-imput"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                  })}
                />

                {errors.email?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}

                {errors.email?.type === "pattern" && (
                  <p className="error-notification">Correo es invalido</p>
                )}

                {/* contraseña */}

                <label className="label-login">Contraseña</label>
                <br />
                <input
                  className="text-imput"
                  type="text"
                  placeholder="Ingresa tu contraseña"
                  {...register("contraseña", {
                    required: true,
                    minLength: 8,
                  })}
                />

                {/* mensaje de errores */}
                {errors.contraseña?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}
                {errors.contraseña?.type === "minLength" && (
                  <p>La contraseña deber tener por lo menos 8 caracteres</p>
                )}
              </div>
              <br />
              <input className="botton-sesion" type="submit" value="Login" />
            </form>

            {/* <GoogleOAuthProvider clientId="sooooooyyy una cliennnt iiiddddddd">
              {" "}
              <LoginGoogle />
            </GoogleOAuthProvider> */}

            <form
            // https://hungy-time.onrender.com/api/v1/auth/google/login
            >
              {" "}
            </form>

            <br />
            <br />
            <div className="link-regisro">
              {" "}
              <span className="text-for-cuenta">¿no tienes cuenta? </span>
              <Link className="cuenta-button" to="/registro">
                registrarse
              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
