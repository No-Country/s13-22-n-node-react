import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink as Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./User.css";
import img_user from "../../../public/img/About Bg.png";
import icon_correo from "../../../public/svg/correo.svg";
import icon_ubicacion from "../../../public/svg/ubicacion.svg";
import icon_telefono from "../../../public/svg/telefono.svg";
import RandomizerCard from "../../components/randomizer-card/Randomizer-card";
// import { GoogleOAuthProvider } from "@react-oauth/google";

export const User = () => {
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
      <div className="body-of-page-user">
        <div className="body-user">
          <div className="user-container">
            <br />
            <img className="user_imagen" src={img_user} />
            <h3>nombre</h3>
            <h3>apellido</h3>

            <tbody>
              <tr>
                <td>
                  {" "}
                  <div className="img_icon">
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
                  <div className="text-alination">
                    {" "}
                    <p>Florida 1745, San Rafael</p>{" "}
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
                <td>
                  {" "}
                  <div className="text-alination">
                    {" "}
                    <p>+54 262742 72 6593</p>
                  </div>
                </td>
              </tr>
            </tbody>
            <br />
            <Link className="botton_edit" to="/UserEdit">
              administrar cuenta
            </Link>
            <br />
          </div>

          <RandomizerCard />
        </div>
      </div>{" "}
    </>
  );
};
