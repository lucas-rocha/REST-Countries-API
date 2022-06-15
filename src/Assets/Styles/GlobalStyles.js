import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Nunito Sans', sans-serif;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.background.primary};
    overflow-x: hidden; 
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    
    @media (max-width: 1440px) {
      margin: 0 2rem;
    }
  }

  :root {
    --dark-blue: hsl(209, 23%, 22%); // Dark Mode Elements
    --very-dark-blue: hsl(207, 26%, 17%); // Dark Mode Background
    --very-dark-blue: hsl(200, 15%, 8%); // Light Mode Text
    --dark-gray: hsl(0, 0%, 52%); // Light Mode Input
    --very-light-gray: hsl(0, 0%, 98%); // Light Mode Background
    --white: hsl(0, 0%, 100%); // Dark Mode Text & Light Mode Elements
  }
`;
