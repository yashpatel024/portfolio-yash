import React from 'react'
import { styled } from 'styled-components'
import { navLinks } from '../../constants/data';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 50px;
  background-color: var(--oxford-blue);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  counter-reset: item 0;
  z-index: 12;
`

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  // For Mobile - hamburger Menu
  @media (max-width: 768px) {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0px 10px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fs-sm);
      
      a {
        padding: 10px;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
      }
    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        {/* Logo Later */}
        <StyledLinks>
          <ol>
            {navLinks &&
              navLinks.map(({name, hash}, i) => (
                <li key={i}>
                  <a href={hash}>{name}</a>
                </li>
              ))
              }
          </ol>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header