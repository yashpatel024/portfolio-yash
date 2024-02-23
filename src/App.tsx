import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MainSection from "./components/MainSection/mainSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
