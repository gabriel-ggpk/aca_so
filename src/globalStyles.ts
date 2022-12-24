import { createGlobalStyle } from 'styled-components';
import Line from '@/assets/background-line.svg';
import Gas from '@/assets/Gas.svg';

const GlobalStyle = createGlobalStyle`
    html{
        height: -webkit-fill-available;
    }
  body {
    background-color: #030446;
    background-image: url(${Line}), url(${Gas}) ;
    background-repeat: no-repeat;
    background-position: right top, center;
    background-size: auto, contain;
    margin: 0;
    padding: 0;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
`;

export default GlobalStyle;
