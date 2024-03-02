import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink as Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import "./Login.css";
import potato from "../../../public/img/friesIcon.png";
import burger from "../../../public/img/burgerIcon.png";
import cola from "../../../public/img/sodaIcon.png";
import pizza from "../../../public/img/pizzaIcon.png";
import { FloatingIcons } from "../../components/FloatingIcons/FloatingIcons";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axios.post(
        `https://hungry-time-dev.onrender.com/api/v1/auth/login`,
        data
      );

      const { token, userId, role } = response.data;

      // Guarda el token, userId y role en una cookie
      setAuthData(token, userId, role);

      // Redirige al dashboard después del login exitoso
      navigate("/");
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

  const setAuthData = (token, userId, role) => {
    // Establece la cookie con el token
    Cookies.set("token", token, { expires: 7 }); // Caduca en 7 días
    Cookies.set("userId", userId, { expires: 7 });
    Cookies.set("role", role, { expires: 7 });

    // Agrega un mensaje de log para verificar
    console.log("Datos de autenticación guardados correctamente:", { token, userId, role });
  };

  return (
    <>
      <div className="body-of-page">
        <div className="body-login">
        <FloatingIcons/>
          <div className="login-container">
            <h2 className="title">Iniciar sesión</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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

                <label className="label-login">Contraseña</label>
                <br />
                <input
                  className="text-imput"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="error-notification">La contraseña deber tener por lo menos 8 caracteres</p>
                )}
              </div>
              <br />
              <input className="botton-sesion" type="submit" value="Login" />
            </form>

            <br />
            <br />
            <div className="link-regisro">
              <span className="text-for-cuenta">¿No tienes cuenta? </span>
              <Link className="cuenta-button" to="/registro">
                registrarse
              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};