import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink as Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./UserEdit.css";
import icon_correo from "../../../public/svg/correo.svg";
import icon_ubicacion from "../../../public/svg/ubicacion.svg";
import icon_telefono from "../../../public/svg/telefono.svg";
import RandomizerCard from "../../components/randomizer-card/Randomizer-card";

export const UserEdit = () => {
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
      <div className="body-page">
        <div className="body-User-edit">
          <div className="user-edit-container">
            <br />
            <br />{" "}
            <Link className="botton_back" to="/user">
              Regresar
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <br />
                <label className="input-imagen-update" for="foto">
                  <span>Elige un archivo</span> <br />o arrastralo aqui
                </label>
                <input
                  className="up-photo-imput"
                  id="foto"
                  type="file"
                  {...register("password", { required: true, minLength: 8 })}
                />{" "}
                <br />
                {/* mensaje de errores */}
                {errors.password?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p>La contraseña deber tener por lo menos 8 caracteres</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  className="text-imput-update"
                  {...register("nombre", {
                    required: true,
                    pattern: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
                  })}
                />
                <br />

                {errors.nombre?.type === "required" && (
                  <p className="error-notification">Campo obligatorio</p>
                )}

                {errors.nombre?.type === "pattern" && (
                  <p className="error-notification">Nombre invalido</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Apellido"
                  className="text-imput-update"
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
              <br />
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <div className="img_icon_up">
                      <img src={icon_correo} alt="" />
                    </div>{" "}
                  </td>
                  <td>
                    <div className="text-alination">
                      {" "}
                      <p>correo@gmail.com</p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    {" "}
                    <div className="img_icon">
                      <img src={icon_ubicacion} alt="" />
                    </div>{" "}
                  </td>
                  <td>
                    {" "}
                    <div>
                      <input
                        type="text"
                        id="address"
                        placeholder="Ingrese su direccion"
                        className="text-imput-update"
                        {...register("address", {
                          required: true,
                        })}
                      />

                      {errors.address?.type === "required" && (
                        <p className="error-notification">Campo obligatorio</p>
                      )}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    {" "}
                    <div className="img_icon">
                      <img src={icon_telefono} alt="" />
                    </div>{" "}
                  </td>
                  <div>
                    <input
                      type="number"
                      id="number"
                      placeholder="Numero"
                      className="text-imput-update"
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
                  <br />
                </tr>
              </tbody>

              <input
                className="botton_edit_sutmit"
                type="submit"
                value="guardar cambios"
              />
            </form>
            <br />
          </div>

          <RandomizerCard />
        </div>
      </div>{" "}
    </>
  );
};
