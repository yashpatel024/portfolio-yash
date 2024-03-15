import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Layout from "./components/layout";
import { styled } from "styled-components";
import Hero from "./components/Hero/hero";

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
        </StyledMainContainer>
      </Layout>
    </>
  );
};

export default App;
