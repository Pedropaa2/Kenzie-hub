import { AppRoutes } from "./routes/routes";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <ToastContainer />
      </>
      <AppRoutes />
    </div>
  );
}

export default App;
