import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body{
        height: 100vh;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-rendering: optimizeLegibility;
    }

    html{
        font-size: 62.5%;
    }
`;
 
export default GlobalStyle;