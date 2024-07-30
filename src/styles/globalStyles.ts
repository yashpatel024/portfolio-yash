import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export const GlobalStyle = createGlobalStyle`
  // Import Fonts

  // Import Variable which is declared in css
  ${variables}

  // Create Global Style
  html{
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,*:after {
    box-sizing: inherit;
  }

  /* Scrollbar style */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--light-black) var(--background-black);
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-black);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--light-black);
    border: 3px solid var(--background-black);
    border-radius: 10px;
  }

  body {
    margin: 0%;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background-black);

    color: var(--white);
    font-family: var(--font-sans);
    font-size: var(--fs-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fs-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    /* For Mobile - blur effect */
    &.blur {
      overflow: hidden;

      #home {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }

    #root {
      min-height: 100vh;
      display: grid;
      grid-template-rows: 1fr auto;
      grid-template-columns: 100%;
    }

    main {
      width: 100%;
      min-height: 100vh;
      padding: 200px 15% 0 15%;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-x: hidden;
      
      @media (max-width: 1080px) {
        padding: 150px 10% 0 10%;
      }

      @media (max-width: 768px) {
        padding: 150px 8% 0 8%;
      }

      @media (max-width: 480px) {
        padding: 100px 6% 0 6%;
      }
    }

    section {
      margin: 0 auto;
      padding: 100px 0;
      max-width: 100vw;

      @media (max-width: 768px) {
        padding: 2rem 0;
        max-width: 100vw;
      }

      @media (max-width: 480px) {
        padding: 2rem 0;
        max-width: 100vw;
      }
    }
  }

  // add Fonts and other variable
  // Also add New themes in Styles - Breakpoints defines
  // Defines Mixins as well
`