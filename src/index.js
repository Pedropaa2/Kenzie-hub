import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalstyle";
import { RegisterProvider } from "./providers/RegisterContext";
import { LoginProvider } from "./providers/LoginContext";
import { DashProvider } from "./providers/DashBoardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <DashProvider>
          <RegisterProvider>
            <GlobalStyle />

            <App />
          </RegisterProvider>
        </DashProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
