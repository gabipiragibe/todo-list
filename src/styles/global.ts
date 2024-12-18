import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
