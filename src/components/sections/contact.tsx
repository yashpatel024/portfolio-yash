import React from 'react'
import styled from 'styled-components'

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      Contact
    </StyledContactSection>
  )
}

export default Contact