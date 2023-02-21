import { createContext, useContext } from "react";
import { api } from "../Services/api";
import { useState } from "react";
import { LoginContext } from "./LoginContext";
import { toast } from "react-toastify";

export const DashContext = createContext({});

export const DashProvider = ({ children }) => {
  const { reloadList } = useContext(LoginContext);
  const id = localStorage.getItem("techID");

  const token = localStorage.getItem("@TOKEN");

  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  async function submitFunction(data) {
    try {
      const response = await api.post(`/users/techs`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia criada com sucesso");
      setOpen(false);
      reloadList();
    } catch (error) {
      toast.error(error.message);
    }
  }
  async function updateTech(data) {
    try {
      const response = await api.put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia atualizada com sucesso");
      setOpenDialog(false);
      reloadList();
    } catch (error) {
      toast.error(error.message);
    }
  }
  async function deleteTech() {
    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia deleteda sucesso");
      setOpenDialog(false);
      reloadList();
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <DashContext.Provider
      value={{
        open,
        setOpen,
        submitFunction,
        setOpenDialog,
        openDialog,
        updateTech,
        deleteTech,
      }}
    >
      {" "}
      {children}{" "}
    </DashContext.Provider>
  );
};
