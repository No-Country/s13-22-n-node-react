import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Cookies from "js-cookie";
import "./HeaderLoginIcon.css"
import { Link } from 'react-router-dom';



export const HeaderLogin = ({ settings, setUserStatus }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    // Eliminar la cookie "token"
    Cookies.remove("token");
    // Establecer userStatus en falso para indicar que el usuario ha cerrado sesión
    setUserStatus(false);
    // Cerrar el menú de usuario después de cerrar sesión
    setAnchorElUser(null);
};
return (
  <>
      <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Opciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <img
                      className="icon__img--login"
                      alt="Login Icon"
                      src="../../../public/svg/Login.svg"
                  />
              </IconButton>
          </Tooltip>
          <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
          >
              {settings.map((setting, index) => (
                  <li
                      className="user__list"
                      key={`${setting.desc}-${index}`}
                      onClick={handleCloseUserMenu}
                  >
                      {setting.desc === "Logout" ? (
                          <Link className="user__link" to={setting.link} onClick={handleLogout}>
                              {setting.desc}
                          </Link>
                      ) : (
                          <Link className="user__link" to={setting.link}>
                              {setting.desc}
                          </Link>
                      )}
                  </li>
              ))}
          </Menu>
      </Box>
  </>
);
};
