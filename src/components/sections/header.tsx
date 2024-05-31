import React from "react";
import { styled } from "styled-components";
import { navLinks } from "../../constants/data";
import IconLogo from "../icons/logo";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 30px 250px;
  width: 100%;
  height: 100px;
  background-color: var(--background-black);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--light-black);
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  /* counter-reset: item 0; */
  z-index: 12;

  // For Mobile - hamburger Menu
  @media (max-width: 768px) {
    display: none;
  }

  .nav-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 157px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 48px;
    background-color: var(--light-blue);

    .contact-me-button {
      color: var(--white);
      font-size: var(--fs-md);
      font-family: var(--font-sans);
      font-weight: 500;
      line-height: normal;
      text-decoration: none;
      transition: var(--transition);
    }
  }
`;

const StyledLinks = styled.div`
  ol {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 0px 35px;
      position: relative;
      /* counter-increment: item 1; */
      font-size: var(--fs-md);

      a {
        /* padding: 35px; */
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        text-align: center;
      }
    }
  }
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderLogo = () => {
  return (
    <StyledLogo>
      <IconLogo />
    </StyledLogo>
  );
};

const ContactMeButton = (
  <a className="contact-me-button" href="#contact">
    Contact me
  </a>
);

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <HeaderLogo />
        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ name, hash }, i) => (
                <li key={hash}>
                  <a href={hash}>{name}</a>
                </li>
              ))}
          </ol>
        </StyledLinks>
        <div className="nav-button">{ContactMeButton}</div>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
