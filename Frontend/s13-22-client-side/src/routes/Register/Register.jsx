import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink as Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./Register.css";
import potato from "../../../public/img/friesIcon.png";
import burger from "../../../public/img/burgerIcon.png";
import cola from "../../../public/img/sodaIcon.png";
import pizza from "../../../public/img/pizzaIcon.png";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `https://hungy-time.onrender.com/api/v1/auth/register`,
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
      <main>
        <div className="body-register">
          <div className="imagenes-container">
            <img className="burger anim-float" src={burger} />
            <img className="pizza anim-float" src={pizza} />
            <img className="potato anim-float" src={potato} />
            <img className="cola anim-float" src={cola} />
          </div>
          <div className="register-container">
            <h2 className="title">Crear cuenta</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="label-register">Nombre</label>
                <br />
                <input
                  type="text"
                  id="name"
                  placeholder="Ingrese tu nombre"
                  className="text-imput"
                  {...register("nombre", {
                    required: true,
                    pattern: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
                  })}
                />

                {errors.nombre?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}

                {errors.nombre?.type === "pattern" && (
                  <p className="error-notification">Nombre invalido</p>
                )}
              </div>

              <div>
                <label className="label-register">Apellido</label>
                <br />
                <input
                  type="text"
                  id="last_name"
                  placeholder="Ingrese su apellido"
                  className="text-imput"
                  {...register("apellido", {
                    required: true,
                    pattern: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
                  })}
                />

                {errors.apellido?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}

                {errors.apellido?.type === "pattern" && (
                  <p className="error-notification">Nombre invalido</p>
                )}
              </div>

              <div>
                <label className="label-register">Telefono</label>
                <br />
                <input
                  type="number"
                  id="number"
                  placeholder="Ingrese su numero"
                  className="text-imput"
                  {...register("number", {
                    required: true,
                    pattern: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
                  })}
                />

                {errors.number?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}

                {errors.number?.type === "pattern" && (
                  <p className="error-notification">Telefono invalido</p>
                )}
              </div>

              <div>
                <label className="label-register">Direccion</label>
                <br />
                <input
                  type="text"
                  id="address"
                  placeholder="Ingrese su direccion"
                  className="text-imput"
                  {...register("address", {
                    required: true,
                  })}
                />

                {errors.address?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}
              </div>

              {/* correo */}
              <div>
                <label className="label-register">Correo</label>
                <br />
                <input
                  className="text-imput"
                  id="email"
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
              </div>
              {/* contraseña */}
              <div>
                <label className="label-register">Contraseña</label>
                <br />
                <input
                  className="text-imput"
                  id="password"
                  type="text"
                  placeholder="Ingresa tu contraseña"
                  {...register("password", { required: true, minLength: 8 })}
                />

                {/* mensaje de errores */}
                {errors.password?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p>La contraseña deber tener por lo menos 8 caracteres</p>
                )}
              </div>

              <div>
                {" "}
                <label htmlFor="confirmarClave" className="label-register">
                  Confirmar Password
                </label>
                <br />
                <input
                  type="password"
                  id="confirmarClave"
                  placeholder="ingrese de vuelta la contraseña"
                  className="text-imput"
                  {...register("confirmarClave", {
                    validate: (value) =>
                      value === getValues("password") ||
                      "Las contraseñas no coinciden.",
                  })}
                />
              </div>

              <br />
              <input
                className="botton-sesion"
                type="submit"
                value="crear cuenta"
              />
            </form>

            <div className="link-regisro">
              {" "}
              <span className="text-for-cuenta">¿Tienes cuenta? </span>
              <Link className="cuenta-button" to="/login">
                iniciar sesion
              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
