import React from 'react'
import styled from 'styled-components'

const StyledExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Experience = () => {
  return (
    <StyledExperienceSection id="experience">
      <h2>Experience</h2>
    </StyledExperienceSection>
  )
}

export default Experience