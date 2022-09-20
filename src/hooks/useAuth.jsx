import React from "react";
import { isAuthenticated, login, logout } from "../api";
import useLocalStorage from "./useLocalStorage";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { schemaValidate } from "../util";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("isLoggedIn", false, {});

  const [responseErrors, setResErrors] = React.useState("");

  const [errors, setErrors] = React.useState({ email: "", password: "" });

  const [loading, setLaoding] = React.useState(false);

  const [data, setData] = React.useState(null);

  const location = useLocation();

  const navigate = useNavigate();

  React.useEffect(() => {
    isAuthenticated()
      .then((result) => {
        if (result.data) {
          setAuth(true);
          setData(result.data);
          if (location.pathname === "/") {
            navigate("/admin", {
              replace: true,
            });
          }
        }
      })
      .catch(() => setAuth(false));
  }, []);

  const authLogin =
    ({ email = "", password = "" }) =>
    async (e) => {
      e.preventDefault();
      try {
        const validationErrors = schemaValidate({ email, password });
        if (Object.keys(validationErrors).length) setErrors(validationErrors);
        else {
          setLaoding(true);
          const result = await login({ email, password });
          if (result.message) {
            setAuth(true);
            navigate("/admin");
            setLaoding(false);
          } else setLaoding(false);
        }
      } catch (error) {
        setLaoding(false);
        String(error.message).includes("user") ||
        String(error.message).includes("password") ||
        String(error.message).includes("email")
          ? setResErrors(error.message)
          : setResErrors("Opps we are currently unvilable");
      }
    };

  const authLogout = async () => {
    try {
      const result = await logout();
      if (result?.message) {
        setAuth(false);
      } else setAuth(false);
    } catch (error) {
      setAuth(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        authLogin,
        authLogout,
        data,
        loading,
        errors,
        responseErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
