import React from "react";
import logo from "../../assets/Logo.svg";
import { StyledHeader } from "./styledHeader";
import { Link } from "react-router-dom";

export function Header({ text }) {
  return (
    <StyledHeader>
      <div className="header_Container">
        <img src={logo} alt="" />

        <Link to="/" className="button">
          {text}{" "}
        </Link>
      </div>
    </StyledHeader>
  );
}
