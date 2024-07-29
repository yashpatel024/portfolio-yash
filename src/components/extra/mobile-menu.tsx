import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { navLinks } from '../../constants/data';
import { handleURLButtonClick } from '../../functions/global';

const StyledHamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  justify-content: center;
  align-items: center;
  font-size: var(--fs-xxxl);
  cursor: pointer;
  z-index: 11;

  .action-icon {
    position: absolute;
    top: 0;
    right: 0;
    color: var(--white);
    transition: var(--transition);
  }

  .menu-container {
    position: fixed;
    top: 0;
    right: 0;
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background-color: var(--background-black);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--light-black);
  }
`;

const StyledLinks = styled.div`
  ol {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 40px;

    li {
      position: relative;
      /* counter-increment: item 1; */
      font-size: var(--fs-xl);

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

const StyledContactMeButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 48px;
  background-color: var(--light-blue);
  font-size: var(--fs-xl);
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
`;

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

const StyledBurgerButton = styled.div`
  position: relative;
  right: 0;
  z-index: 11;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .burger {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &::before,
    &::after {
      content: '';
      display: block;
      height: 2px;
      width: 50%;
      margin: 0;
      display: flex;
      align-self: flex-end;
      background-color: var(--white);
      position: relative;
      transition: var(--transition);
    }

    &::after {
      top: -5px;
    }

    &::before {
      top: 5px;
    }
  }

  .burger-active {
    &::after {
      transform: rotate(45deg);
      top: -5px;
    }

    &::before {
      transform: rotate(-45deg);
      top: -2px;
    }
  }
`;

const variants = {
  initial: { width: '0', opacity: 0 },

  enter: {
    width: '80vw',
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },

  exit: {
    width: '0',
    opacity: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function MobileMenu() {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <StyledHamburgerMenu>
      {/* <Helmet> - For Blur Effect */}
      {/* <Helmet>
        <body className={menuState ? 'blur' : ''}></body>
      </Helmet> */}
      <AnimatePresence mode='wait'>
        {menuState && (
          <motion.div
            className='menu-container'
            variants={variants}
            initial='initial'
            animate='enter'
            exit='exit'
          >
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
          </motion.div>
        )}
      </AnimatePresence>
      <StyledBurgerButton onClick={toggleMenu}>
        <div
          className={`${'burger'} ${menuState ? 'burger-active' : ''}`}
        ></div>
      </StyledBurgerButton>
    </StyledHamburgerMenu>
  );
}
