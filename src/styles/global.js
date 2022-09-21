import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  html, body, #root {
    background-color: black;
    height: 100%;
  }
`;

export default GlobalStyle;
