import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    overflow: hidden;
  }

  #root {
    display: flex;
    flex-flow: column;
    min-height: 100vh;
  }

  body {
    background: #00b140;
  }
`;
