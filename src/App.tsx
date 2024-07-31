import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Layout from "./components/layout";
import { styled } from "styled-components";
import Hero from "./components/sections/hero";
import Experience from "./components/sections/experience";
import Project from "./components/sections/project";
import Contact from "./components/sections/contact";
import About from "./components/sections/about";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const StyledMainContainer = styled.main`
  /* border: var(--dev-border); */
  counter-reset: none;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <StyledMainContainer>
          <Hero />
          <About />
          <Experience />
          <Project />
          <Contact />
        </StyledMainContainer>
      </Layout>

      {/* Vercel Analytics & Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
