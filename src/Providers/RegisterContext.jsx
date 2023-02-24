import { createContext } from "react";
import React from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
  const navigate = useNavigate();

  async function submitFunction(data) {
    try {
      const response = await api.post("/users", data);

      toast.success("Email cadastrado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <RegisterContext.Provider value={{ submitFunction }}>
      {children}
    </RegisterContext.Provider>
  );
};
