import { createContext } from "react";
import React from "react";
import { api } from "../Services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("name")) || null
  );
  const [techs, setTechs] = useState([]);
  const navigate = useNavigate();
  async function submitFunction(data) {
    try {
      const response = await api.post("/sessions", data);

      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);
      setIsAuthenticated({ ...response.data.user });
      setTechs(response.data.user.techs);
      localStorage.setItem("name", JSON.stringify(response.data.user));

      toast.success("Login efetuado com sucesso");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Email ou senha incorretos");
    }
  }

  async function reloadList() {
    try {
      const response = await api.get(`/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem("name", JSON.stringify(response.data));
      setTechs(response.data.techs);
    } catch (error) {}
  }
  return (
    <LoginContext.Provider
      value={{
        submitFunction,
        isAuthenticated,
        setIsAuthenticated,
        techs,
        setTechs,
        reloadList,
      }}
    >
      {" "}
      {children}{" "}
    </LoginContext.Provider>
  );
};
