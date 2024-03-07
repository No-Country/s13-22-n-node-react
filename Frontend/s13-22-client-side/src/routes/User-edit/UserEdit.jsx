import { useState, useEffect } from "react";
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

  const [imageUrl, setImageUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
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

  const onSubmit = async (data) => {
    try {
      const token = Cookies.get("token");
      const userId = Cookies.get("userId");

      if (!token || !userId) {
        // Si no hay un token o un ID de usuario en las cookies, redirige al inicio de sesión
        navigate("/login");
        return;
      }

      // Incluye la URL de la imagen en los datos del formulario
      data.image = imageUrl;

      // Actualizar la URL del endpoint con el ID del usuario
      const response = await axios.patch(
        `https://hungry-time-dev.onrender.com/api/v1/users/${userId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Respuesta de la actualización:", response.data);

      // Redirige al dashboard después de la actualización exitosa
      navigate("/user");
    } catch (error) {
      console.error("Error en la solicitud:", error.message);

      if (
        (error.response && error.response.status === 403) ||
        error.response.status === 401
      ) {
        // Maneja errores de autenticación
        navigate("/login");
      } else {
        // Maneja otros errores
        // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones
      }
    }
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
      setLoadingImage(false); // Finaliza el estado de carga de la imagen

      // Agrega console logs para ver la respuesta
      console.log("Respuesta de carga de imagen:", response.data);
    } catch (error) {
      console.error("Error al cargar la imagen:", error);

      // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones
    }
  };

  return (
    <>
      <div className="body-page">
        <div className="body-User-edit">
          <div className="user-edit-container">
            <br />
            <br />
            <Link className="botton_back" to="/user">
              Regresar
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <br />
                <label htmlFor="image">Cambiar foto</label>
                <input
                  className="up-photo-imput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />

                {loadingImage && <p>Cargando imagen...</p>}
                <br />
                {/* mensaje de errores */}
              </div>
              <div>
                <input
                value={userData.name}
                  type="text"
                  id="name"
                  placeholder="Nombre"
                  className="text-imput-update"
                  {...register("name", {
                    required: true,
                    pattern: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
                  })}
                />
                {/* mensaje de errores */}
              </div>
              <div>
                <input
                 value={userData.last_name}
                  type="text"
                  id="last_name"
                  placeholder="Apellido"
                  className="text-imput-update"
                  {...register("last_name", {
                    required: true,
                    pattern: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
                  })}
                />
                {/* mensaje de errores */}
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
                      {/* Correo */}
                      <div>
                        <input
                         value={userData.email}
                          className="text-imput-update"
                          id="email"
                          type="email"
                          placeholder="correo@ejemplo.com"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                          })}
                        />
                        {/* mensaje de errores */}
                      </div>
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
                       value={userData.address}
                        type="text"
                        id="address"
                        placeholder="Ingrese su dirección"
                        className="text-imput-update"
                        {...register("address", {
                          required: true,
                        })}
                      />
                      {/* mensaje de errores */}
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
                    <div>
                      <input
                       value={userData.phone}
                        type="text"
                        id="phone"
                        placeholder="Teléfono"
                        className="text-imput-update"
                        {...register("phone", {
                          required: true,
                          pattern: /^[0-9]{10}$/,
                        })}
                      />
                      {/* mensaje de errores */}
                    </div>
                  </td>
                </tr>
              </tbody>

              <input
                className="botton_edit_sutmit"
                type="submit"
                value="Guardar cambios"
              />
            </form>
            <br />
          </div>

          <RandomizerCard />
        </div>
      </div>
    </>
  );
};
