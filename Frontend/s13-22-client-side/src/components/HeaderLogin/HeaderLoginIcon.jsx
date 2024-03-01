import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";

import "./HeaderLoginIcon.css"
import { Link } from 'react-router-dom';



export const HeaderLogin = ({settings}) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };




  const handleCloseUserMenu = () => {
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
              <Link className="user__link" to={setting.link}>
                {setting.desc}
              </Link>
            </li>
          ))}
        </Menu>
      </Box>
    </>
  );
};
