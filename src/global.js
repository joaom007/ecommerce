import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  box-sizing: border-box;
}

*,
:before,
:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: "Playfair Display", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #7db6ae;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1, h2, h3, h4 {
  color: gray;
  margin: 0;
}

`;
