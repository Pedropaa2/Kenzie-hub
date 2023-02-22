import React, { useContext } from "react";
import logo from "../../assets/Logo.svg";
import { Input } from "../../components/InputsLoginAndRegister";
import { useForm } from "react-hook-form";
import { ThemeButton } from "../../components/ButtonBackAndLogout/styledButton";
import { ThemeP } from "../../styles/typography";
import { StyledLogin } from "./styledLogin";
import { ThemeH1 } from "../../styles/typography";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { LoginContext } from "../../providers/LoginContext";
import { useEffect } from "react";

export function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      navigate("/dashboard");
    }
  });
  const { submitFunction } = useContext(LoginContext);
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Formato de email inválido"),
    password: yup
      .string()
      .required("Password obrigatório")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/^(?=.*[a-z])/, "Deve conter ao menos uma letra minúscula")
      .matches(/^(?=.*[A-Z])/, "Deve conter ao menos uma letra maiúscula")
      .min(6, "Deve conter no mínimo 8 caracteres"),
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
    <StyledLogin>
      <>
        <ToastContainer />
      </>
      <img src={logo} alt="" />
      <div className="form_Container">
        <ThemeH1 color="--Grey-05">Login</ThemeH1>
        <form action="" onSubmit={handleSubmit(submit)}>
          <Input
            labelText="Email"
            register={register("email")}
            errors={errors.email}
            placeHolder="Digite aqui seu email"
            type="email"
          />
          <Input
            labelText="Senha"
            register={register("password")}
            errors={errors.password}
            placeHolder="Digite aqui sua senha"
            type="password"
          />
          <ThemeButton
            backgroundColor="--Color-primary"
            color="--Grey-05"
            hoverBackground="--Color-primary-02"
            type="submit"
          >
            Entrar
          </ThemeButton>
        </form>
        <ThemeP color="--Grey-04">Ainda não possui uma conta?</ThemeP>
        <Link to="/register" className="button">
          Cadastre-se
        </Link>
      </div>
    </StyledLogin>
  );
}
