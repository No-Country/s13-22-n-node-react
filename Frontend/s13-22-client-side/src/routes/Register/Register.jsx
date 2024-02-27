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
  const [loadingImage, setLoadingImage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL de la imagen
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      delete data.confirmarClave; // Eliminar el campo confirmarClave de los datos
      // Agrega la URL segura de la imagen al objeto de datos
      data.image = imageUrl;
      console.log("Datos del formulario:", data);

      const response = await axios.post(
        `https://hungry-time-dev.onrender.com/api/v1/auth/register`,
        data
      );
      const token = response.data.token;

      // Establece la cookie con el token
      setTokenInCookie(token);

      // Redirige al dashboard después del login exitoso
      navigate("/welcome");
    } catch (error) {
      console.error("Error en la solicitud:", error.message);

      // Verifica si error.response existe y luego verifica la propiedad status
      if (
        error.response &&
        (error.response.status === 403 || error.response.status === 401)
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

  // Función para manejar la carga de la imagen
  const handleImageUpload = async (e) => {
    setLoadingImage(true); // Inicia el estado de carga de la imagen
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("files", files);
    try {
      const response = await axios.post(
        "https://hungry-time-dev.onrender.com/api/v1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Actualiza el estado con la URL de la imagen cargada
      setImageUrl(response.data[0].secure_url);
      console.log("Respuesta de secure_url ",response.data[0].secure_url)
      setLoadingImage(false); // Finaliza el estado de carga de la imagen

      // Agrega console logs para ver la respuesta
      console.log("Respuesta de carga de imagen:", response.data);
    } catch (error) {
      console.error("Error al cargar la imagen:", error);

      // Verifica si el error es de "Unauthorized"
      if (error.response && error.response.status === 401) {
        console.error("Error de autorización al cargar la imagen:", error.response.data);
      }
    }
  };

  return (
    <>
      <main>
        <div className="body-register">
          <div className="imagenes-container">
            <img className="burger anim-float" src={burger} alt="Burger" />
            <img className="pizza anim-float" src={pizza} alt="Pizza" />
            <img className="potato anim-float" src={potato} alt="Potato" />
            <img className="cola anim-float" src={cola} alt="Cola" />
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
                  {...register("name", {
                    required: true,
                    pattern: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
                  })}
                />

                {errors.name?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}

                {errors.name?.type === "pattern" && (
                  <p className="error-notification">Nombre invalido</p>
                )}
              </div>

              {/* Apellido */}
              <div>
                <label className="label-register">Apellido</label>
                <br />
                <input
                  type="text"
                  id="last_name"
                  placeholder="Ingrese su apellido"
                  className="text-imput"
                  {...register("last_name", {
                    required: true,
                    pattern: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
                  })}
                />

                {errors.last_name?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}

                {errors.last_name?.type === "pattern" && (
                  <p className="error-notification">Apellido invalido</p>
                )}
              </div>

              {/* Telefono */}
              <div>
                <label className="label-register">Telefono</label>
                <br />
                <input
                  type="number"
                  id="phone"
                  placeholder="Ingrese su numero"
                  className="text-imput"
                  {...register("phone", {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  })}
                />

                {errors.phone?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}

                {errors.phone?.type === "pattern" && (
                  <p className="error-notification">Telefono invalido</p>
                )}
              </div>

              {/* Dirección */}
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

              {/* Correo */}
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

              {/* Contraseña */}
              <div>
                <label className="label-register">Contraseña</label>
                <br />
                <input
                  className="text-imput"
                  id="password"
                  type="password"
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

              {/* Confirmar Contraseña */}
              <div>
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
                      value === getValues("password") || "Las contraseñas no coinciden.",
                  })}
                />
                {errors.confirmarClave && (
                  <p className="error-notification">
                    {errors.confirmarClave.message}
                  </p>
                )}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </div>

              {/* Imagen */}
              <div>
                <label className="label-register">Foto de perfil</label>
                <br />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              {loadingImage && <div className="loader"></div>}
              </div>

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

export default Register;
