import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import "./AddProduct.css";

export const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [setErrorMessage] = useState("");

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
      <div className="product-container">
        <h2 className="productoAdd-title">Agregar producto</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Nombre */}

          <div>
            <label className="label-product">Nombre</label>
            <br />
            <input
              type="text"
              id="product"
              placeholder="Nombre del producto"
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

          {/* Precio */}

          <div>
            <label className="label-product">Precio</label>
            <br />
            <input
              type="number"
              id="Precio"
              placeholder="Precio del producto"
              className="text-imput"
              {...register("precio", {
                required: true,
                pattern:
                  /^(([1-9]\d*(\.\d{2}){0,1})|(0\.(([1-9]\d)|([0][1-9]))))$/,
              })}
            />

            {errors.precio?.type === "required" && (
              <p className="error-notification">Campo obligatorio</p>
            )}

            {errors.precio?.type === "pattern" && (
              <p className="error-notification">
                El precio del producto no puede ser 0 ni inferior a 0
              </p>
            )}
          </div>

          {/* Descripcion */}
          <div>
            <label className="label-product">Descripcion</label>
            <br />
            <textarea
              className="descripcion-imput"
              id="email"
              type="email"
              placeholder="Describa de forma breve el producto"
              {...register("email", {
                required: true,
                pattern:
                  /^[—…%@|{}+~&*'‘’“”"`;:!.?=,#/\[\]\(\)\s\w\r\n\t_-]+$./,
              })}
            />

            {errors.email?.type === "required" && (
              <p className="error-notification">Campo obligatorio</p>
            )}

            {errors.email?.type === "pattern" && (
              <p className="error-notification">descripcion invalida</p>
            )}
          </div>

          {/* Categoria */}
          <div>
            <label className="label-product">Categoria</label>
            <br />
            <select
              id="category"
              className="text-imput"
              {...register("address", {
                required: true,
              })}
            >
              <option value="Hamburgesa">Hamburgesa</option>
              <option value="pizza">pizza</option>
              <option value="pollo">pollo</option>
            </select>

            {errors.address?.type === "required" && (
              <p className="error-notification">Campo obligatorio</p>
            )}
          </div>

          {/* Promocion */}
          <div className="promotion-section">
            <div className="aliniation">
              <label className="label-product">¿Promocion?</label>
            </div>

            <div className="aliniation">
              <label className="label-product">&nbsp; si</label>
              <input
                name="Promocion"
                id="password"
                type="radio"
                value="si"
                {...register("promo", {
                  required: true,
                })}
              />
            </div>

            <div className="aliniation">
              <label className="label-product">&nbsp;no</label>
              <input
                name="Promocion"
                id="password"
                type="radio"
                value="no"
                {...register("promo", {
                  required: true,
                })}
              />
            </div>
          </div>

          {errors.promo?.type === "required" && (
            <p className="error-notification">Campo obligatorio</p>
          )}

          {/* Subir fotografia */}
          <div>
            <label className="label-product">Subir fotografia</label>
            <br />
            <label className="input-file" for="foto">
              <span>Elige un archivo</span> o arrastralo aqui
            </label>
            <input
              className="up-photo-imput"
              id="foto"
              type="file"
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

          <br />
          <input className="botton-sesion" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};
