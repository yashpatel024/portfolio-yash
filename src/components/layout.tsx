import React from "react";
import { styled } from "styled-components";
import Header from "./header/header";
import Footer from "./footer/footer";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <StyledContent>
      <Header />
      <div id="content">{children}</div>
      <Footer />
    </StyledContent>
  );
};

export default Layout;
