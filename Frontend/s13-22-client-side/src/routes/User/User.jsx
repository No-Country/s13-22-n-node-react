import { useState, useEffect } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./User.css";
import icon_correo from "../../../public/svg/correo.svg";
import icon_ubicacion from "../../../public/svg/ubicacion.svg";
import icon_telefono from "../../../public/svg/telefono.svg";
import RandomizerCard from "../../components/randomizer-card/Randomizer-card";

export const User = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener los datos del usuario al cargar la página
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const token = Cookies.get("token");
      const userId = Cookies.get("userId");

      if (!token || !userId) {
        // Si no hay un token o un ID de usuario en las cookies, redirige al inicio de sesión
        navigate("/login");
        return;
      }

      const response = await axios.get(
        `https://hungry-time-dev.onrender.com/api/v1/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserData(response.data);
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error.message);
    }
  };

  return (
    <>
      <div className="body-of-page-user">
        <div className="body-user">
          <div className="user-container">
            <br />
            <img className="user_imagen" src={userData.image} alt="Imagen de usuario" />
            <h3>{userData.name}</h3>
            <h3>{userData.last_name}</h3>

            <tbody>
              <tr>
                <td>
                  {" "}
                  <div className="img_icon">
                    <img src={icon_correo} alt="Icono de correo" />
                  </div>{" "}
                </td>
                <td>
                  <div className="text-alination">
                    {" "}
                    <p>{userData.email}</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div className="img_icon">
                    <img src={icon_ubicacion} alt="Icono de ubicación" />
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <div className="text-alination">
                    {" "}
                    <p className="address">{userData.address}</p>{" "}
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div className="img_icon">
                    <img src={icon_telefono} alt="Icono de teléfono" />
                  </div>{" "}
                </td>
                <td>
                  {" "}
                  <div className="text-alination">
                    {" "}
                    <p>{userData.phone}</p>
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
