import React from 'react';
import { styled } from 'styled-components';
import { navLinks } from '../../constants/data';
import IconLogo from '../icons/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { handleURLButtonClick } from '../../functions/global';
import MobileMenu from '../extra/mobile-menu';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 30px 250px;
  width: 100vw;
  height: 100px;
  background-color: var(--background-black);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--light-black);

  @media (max-width: 768px) {
    padding: 2rem;
    width: 100vw;
    height: 100px;
    background-color: transparent;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  /* counter-reset: item 0; */
  z-index: 12;
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

    // For Mobile
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 36px;
    width: 35px;
  }
`;

const StyledContactMeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 48px;
  background-color: var(--light-blue);
  font-size: var(--fs-md);
  font-family: var(--font-sans);
  font-weight: 500;
  line-height: normal;
  text-decoration: none;

  .contact-me-button {
    color: var(--white);
    transition: var(--transition);
  }

  .fa-icon {
    margin-left: 10px;
  }

  // For Mobile - hamburger Menu
  @media (max-width: 768px) {
    display: none;
  }
`;

// Header Logo
const HeaderLogo = () => {
  return (
    <StyledLogo>
      <a href='#home'>
        <IconLogo />
      </a>
    </StyledLogo>
  );
};

// Contact Me Button
const ContactMeButton = () => {
  return (
    <StyledContactMeButton
      className='contact-me-button'
      onClick={handleURLButtonClick(
        'https://drive.google.com/file/d/1CKNtDmdphzSVSpy6ZXB2cncLV20qRExa/view?usp=sharing',
        true
      )}
    >
      <span>Resume</span>
      <FontAwesomeIcon icon={faPaperPlane} className='fa-icon' />
    </StyledContactMeButton>
  );
};

// Header Component
const Header = () => {
  return (
    <StyledHeader>
      {/* Menu for Tab to desktop */}
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
        <ContactMeButton />
        <MobileMenu />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
