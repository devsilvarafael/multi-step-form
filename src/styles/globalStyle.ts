import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    // Layout colors
    --marine-blue: hsl(213, 96%, 18%);
    --purplish-blue: sl(243, 100%, 62%);
    --pastel-blue: hsl(228, 100%, 84%);
    --light-blue: hsl(206, 94%, 87%);
    --strawberry-red: hsl(354, 84%, 57%);

    --cool-gray: hsl(231, 11%, 63%);
    --light-gray: hsl(229, 24%, 87%);
    --magnolia: hsl(217, 100%, 97%);
    --alabaster: hsl(231, 100%, 99%);
    --white: hsl(0, 0%, 100%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    background-color: var(--magnolia);
  }
`

export default GlobalStyle;