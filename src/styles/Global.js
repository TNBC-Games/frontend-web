import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: #000000;
    margin: 0;
    padding: 0;
    /* transition: all 0.25s linear; */
  }

  a {
      text-decoration: none
  }
`;