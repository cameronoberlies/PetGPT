import React, { useState } from "react";
import Auth from "../utils/auth"; // Your Auth service

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());

  const handleLogout = () => {
    Auth.logout();
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
