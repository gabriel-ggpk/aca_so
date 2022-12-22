import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html{
        height: -webkit-fill-available;
    }
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'Raleway', sans-serif;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
`;

export default GlobalStyle;
