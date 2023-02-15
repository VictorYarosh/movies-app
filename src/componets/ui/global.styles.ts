import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    max-width: 1250px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;
export default GlobalStyle;
