import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.svg";
import { ThemeH1, ThemeP } from "../../Styles/typography";
import { StyledSection, StyledContent, StyledDashHeader } from "./styledDash";
import { LoginContext } from "../../Providers/LoginContext";
import add from "../../Assets/mais.svg";
import { LiFunction } from "../../Components/Li/index";
import { DashContext } from "../../Providers/DashBoardContext";
import { DialogTech } from "../../Components/Dialog";
import { DialogCreate } from "../../Components/DialogCreateAndExclude";

export function Dash() {
  const { isAuthenticated, setIsAuthenticated, techs, setTechs } =
    useContext(LoginContext);
  const { setOpenDialog, open, openDialog, setOpen } = useContext(DashContext);

  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleClickToOpenDialog = () => {
    setOpenDialog(true);
  };

  const navigate = useNavigate();
  function clearStorage() {
    window.localStorage.clear();
    setIsAuthenticated(null);
    setTechs([]);
  }
  function onclick() {
    handleClickToOpenDialog();
  }

  return (
    <div>
      <StyledDashHeader>
        <div className="header_Container">
          <img src={logo} alt="" />

          <button
            onClick={() => {
              navigate("/");
              clearStorage();
            }}
          >
            Sair
          </button>
        </div>
      </StyledDashHeader>
      <StyledSection>
        <div className="text_Container">
          <ThemeH1 color="--Grey-05">Olá, {isAuthenticated.name} </ThemeH1>
          <ThemeP color="--Grey-04"> {isAuthenticated.course_module} </ThemeP>
        </div>
      </StyledSection>
      <StyledContent className="content">
        <div className="create">
          <ThemeH1 color="--Grey-05">Tecnologias</ThemeH1>
          <div className="img_Container" onClick={handleClickToOpen}>
            <img src={add} alt="" />
          </div>
        </div>

        <ul>
          {techs.map((li) => (
            <LiFunction
              id={li.id}
              key={li.id}
              title={li.title}
              status={li.status}
              open={(event) => {
                onclick();
                window.localStorage.setItem("techID", event.target.id);
                window.localStorage.setItem("techTitle", event.target.title);
              }}
            ></LiFunction>
          ))}
        </ul>
      </StyledContent>
      <DialogTech open={open} />
      <DialogCreate open={openDialog} />
    </div>
  );
}
