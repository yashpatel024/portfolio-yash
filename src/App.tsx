import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import MainSection from "./components/MainSection/mainSection";
import Layout from "./components/layout";
import { styled } from "styled-components";

const StyledMainContainer = styled.main`
  counter-reset: none;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <StyledMainContainer>
          <MainSection />
        </StyledMainContainer>
      </Layout>
    </>
  );
};

export default App;
