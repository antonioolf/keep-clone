import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    //outline: solid 1px red;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    
  }

`

export default GlobalStyle;