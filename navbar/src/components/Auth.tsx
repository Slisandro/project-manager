import { useState } from "react";
import { NavLink } from "react-router-dom";
import Link from "./Link";

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <li className="p-4 hover:bg-gray-800 cursor-pointer">
      <Link
        to={isLoggedIn ? "/logout" : "/login"}
        content={
          "🚪  " + `🚪 ${isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}`
        }
      />
    </li>
  );
};

export default AuthButton;
