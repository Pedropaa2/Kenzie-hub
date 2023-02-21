import { ThemeH3 } from "../../Styles/typography";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DashContext } from "../../Providers/DashBoardContext";
import { StyledDialogCreate } from "./styledDialodCreate";

export function DialogCreate() {
  const { openDialog, setOpenDialog, updateTech, deleteTech } =
    useContext(DashContext);

  const handleToClose = () => {
    setOpenDialog(false);
  };
  const title = localStorage.getItem("techTitle");

  const formSchema = yup.object().shape({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <StyledDialogCreate open={openDialog} className="modal">
      <div className="modal_Container">
        <form className="modal_Content" onSubmit={handleSubmit(updateTech)}>
          <div className="modalHeader">
            <ThemeH3>Tecnologia Detalhes</ThemeH3>
            <p onClick={handleToClose}>X</p>
          </div>
          <div className="input_Container">
            <label htmlFor="input">Nome do projeto</label>
            <input type="text" id="input" value={title} readOnly />
          </div>
          <div className="select_Container">
            <label htmlFor="select">Status</label>
            <select id="select" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <div className="button">
            <button type="submit" className="save">
              Salvar Alterações
            </button>
            <button type="button" onClick={deleteTech} className="exclude">
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyledDialogCreate>
  );
}
