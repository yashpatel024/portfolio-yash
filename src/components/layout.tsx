import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Header from './sections/header';
import Footer from './sections/footer';
import Loader from "./extra/loader";
import { AnimatePresence } from "framer-motion";
// import { locomotiveScroll } from "locomotive-scroll";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = 'default';

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <StyledContent id='home'>
      <AnimatePresence mode='wait'>
        {isLoading && <Loader />}
      </AnimatePresence>
      <Header />
      <div id='content'>{children}</div>
      <Footer />
    </StyledContent>
  );
};

export default Layout;
