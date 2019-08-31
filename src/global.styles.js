import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Open Sans Condensed';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 10px;
            
        }

    }
    
    a {
        text-decoration: none;
        color:black;
    }
    
    
    * {
        box-sizing: border-box;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
  
`