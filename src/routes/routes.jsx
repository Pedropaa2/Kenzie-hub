import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dash } from "../Pages/DashBoard";
import { Login } from "../Pages/LoginPage";
import { Register } from "../Pages/RegisterPage";
import { ProtectedRoutes } from "../Pages/ProtectedRoutes/index";

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
