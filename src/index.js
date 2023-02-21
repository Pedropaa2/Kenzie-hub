import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/globalstyle";
import { RegisterProvider } from "./Providers/RegisterContext";
import { LoginProvider } from "./Providers/LoginContext";
import { DashProvider } from "./Providers/DashBoardContext";

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
