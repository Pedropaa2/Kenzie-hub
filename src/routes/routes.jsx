import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dash } from "../pages/DashBoard";
import { Login } from "../pages/LoginPage";
import { Register } from "../pages/RegisterPage";
import { ProtectedRoutes } from "../pages/ProtectedRoutes/index";

export function AppRoutes({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<Dash />} />
      </Route>
    </Routes>
  );
}
