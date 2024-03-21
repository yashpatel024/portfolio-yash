import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Layout from "./components/layout";
import { styled } from "styled-components";
import Hero from "./components/hero/hero";
import Experience from "./components/experience/experience";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";

const StyledMainContainer = styled.main`
  border: var(--dev-border);
  counter-reset: none;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <StyledMainContainer>
          <Hero />
          <Experience />
          <Project />
          <Contact />
        </StyledMainContainer>
      </Layout>
    </>
  );
};

export default App;
