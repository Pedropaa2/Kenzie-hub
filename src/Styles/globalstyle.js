import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --Color-white: #ffffff;
  --Color-primary: #FF577F;
  --Color-primary-02: #FF427F;
  --Color-secondary: #59323F;
  --Grey-05: #F8F9FA;
  --Grey-04: #868E96;
  --Grey-03: #343B41;
  --Grey-02: #212529;
  --Grey-01: #121214;
 
}
button {
  cursor: pointer;
  border: 0;
  background:transparent;
}
ul, ol, li{
  list-style:none
} 
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  background-color:#000000;
  font-family: "Inter";
  font-style: normal;
}


`;
