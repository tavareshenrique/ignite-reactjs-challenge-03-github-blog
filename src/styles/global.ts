import { createGlobalStyle } from 'styled-components';

import 'react-loading-skeleton/dist/skeleton.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
    font-size: 62.5%;
  }

  body, input, textarea, button {
    font: 400 1rem "Nunito", sans-serif;
  }
`;
