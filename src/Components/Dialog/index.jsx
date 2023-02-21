import { StyledDialog } from "./styledDialog";
import { ThemeH3, ThemeP } from "../../Styles/typography";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DashContext } from "../../Providers/DashBoardContext";

export function DialogTech() {
  const { setOpen, open } = useContext(DashContext);

  const handleToClose = () => {
    setOpen(false);
  };
  const { submitFunction } = useContext(DashContext);
  const formSchema = yup.object().shape({
    status: yup.string().required(""),
    title: yup.string().required("Nome obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(formSchema) });

  const submit = (formSchema) => {
    submitFunction(formSchema);
    reset();
  };

  return (
    <StyledDialog open={open} className="modal">
      <div className="modal_Container">
        <form className="modal_Content" onSubmit={handleSubmit(submit)}>
          <div className="modalHeader">
            <ThemeH3>Cadastrar Tecnologia</ThemeH3>
            <p className="close" onClick={handleToClose}>
              X
            </p>
          </div>
          <div className="input_Container">
            <label htmlFor="input">Nome</label>
            <input type="text" id="input" {...register("title")} />
            <ThemeP className="error">{errors.title?.message}</ThemeP>
          </div>
          <div className="select_Container">
            <label htmlFor="select">Selecionar status</label>
            <select id="select" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <div className="button">
            <button type="submit">Cadastrar Tecnologia</button>
          </div>
        </form>
      </div>
    </StyledDialog>
  );
}
