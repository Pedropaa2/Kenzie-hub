import React from "react";
import { useContext } from "react";
import { LoginContext } from "../../Providers/LoginContext";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function ProtectedRoutes() {
  const { isAuthenticated, reloadList } = useContext(LoginContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } else {
      reloadList();
    }
  }, []);

  return <>{isAuthenticated ? <Outlet /> : null}</>;
}
