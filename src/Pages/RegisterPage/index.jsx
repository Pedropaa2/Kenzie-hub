import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledMain, StyledRegister } from "./styledRegister";
import { Input } from "../../Components/Input";
import { ThemeH1, ThemeP } from "../../Styles/typography";
import { ThemeButton } from "../../Components/Button/styledButton";
import { Header } from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../../Providers/RegisterContext";
import { useEffect } from "react";

export function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      navigate("/dashboard");
    }
  });
  const { submitFunction } = useContext(RegisterContext);
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
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

    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "As senhas devem ser idênticas"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
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
    <StyledRegister>
      <Header text="Voltar" redirect="/" />
      <StyledMain className="form_Container">
        <ThemeH1 color="--Grey-05">Crie sua conta</ThemeH1>
        <ThemeP color="--Grey-04">Rápido e grátis, vamos nessa</ThemeP>

        <form action="" onSubmit={handleSubmit(submit)}>
          <Input
            labelText="Nome"
            register={register("name")}
            errors={errors.name}
            placeHolder="Digite aqui seu nome"
            type="text"
          />
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
          <Input
            labelText="Confirmar Senha"
            register={register("confirmPassword")}
            errors={errors.confirmPassword}
            placeHolder="Digite novamente sua senha"
            type="password"
          />
          <Input
            labelText="Bio"
            register={register("bio")}
            errors={errors.bio}
            placeHolder="Fale sobre você"
            type="text"
          />
          <Input
            labelText="Contato"
            register={register("contact")}
            errors={errors.contact}
            placeHolder="Opção de contato"
            type="text"
          />
          <label htmlFor="select">Selecionar módulo</label>
          <select id="select" {...register("course_module")}>
            <option value="Primeiro Módulo">Primeiro Módulo</option>
            <option value="Segundo Módulo">Segundo Módulo</option>
            <option value="Terceiro Módulo">Terceiro Módulo</option>
            <option value="Quarto Módulo">Quarto Módulo</option>
            <option value="Quinto Módulo">Quinto Módulo</option>
            <option value="Sexto Módulo">Sexto Módulo</option>
          </select>
          <ThemeButton
            backgroundColor="--Color-secondary"
            color="--Grey-05"
            hoverBackground="--Color-primary-02"
            type="submit"
          >
            Cadastrar
          </ThemeButton>
        </form>
      </StyledMain>
    </StyledRegister>
  );
}
