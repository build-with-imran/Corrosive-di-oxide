import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContextValue";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const currentUser = localStorage.getItem("currentUser");
      setIsLoggedIn(!!currentUser);
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const login = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
