import React, { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialLogin = localStorage.getItem("isLogin");
  const [token, setToken] = useState(initialToken);

  let [isLoggenIn, setIsLoggenIn] = useState(initialLogin);

  const login = (tokn) => {
    setToken(tokn);
    console.log("1", isLoggenIn);
    localStorage.setItem("token", tokn);
  };

  const logout = () => {
    setToken("");
    setIsLoggenIn(false);
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token");
  };

  return (
    <authContext.Provider
      value={{ login, token, isLoggenIn, setIsLoggenIn, logout }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
