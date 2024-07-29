import { useState } from 'react';
import styled from 'styled-components';

const StyledBurgerButton = styled.div`
  position: fixed;
  right: 0px;
  margin: 20px;
  z-index: 11;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--background-black);
  display: flex;
  justify-content: center;
  align-items: center;

  .burger {
    width: 100%;

    &::before,
    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 40%;
      margin: auto;
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
      top: -1px;
    }

    &::before {
      transform: rotate(-45deg);
      top: 0x;
    }
  }
`;

export default function MobileBurgerIcon(menuState: boolean, setMenuState: any) {

  return (
    <StyledBurgerButton onClick={() => setMenuState()}>
      <div className={`${'burger'} ${menuState ? 'burger-active' : ''}`}></div>
    </StyledBurgerButton>
  );
}
