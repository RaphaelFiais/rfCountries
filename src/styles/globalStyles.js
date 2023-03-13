import { createGlobalStyle } from "styled-components";

 const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }
    button{
        cursor: pointer;
    }

`

export default GlobalStyle