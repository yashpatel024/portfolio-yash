import { styled } from "styled-components";

const StyledAboutSection = styled.section`
  border: var(--dev-border);

  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-style: normal;
  line-height: normal;

`;

const About = (): JSX.Element => {
  return (
    <StyledAboutSection id="about">
      <p>Innovation </p>
    </StyledAboutSection>
  );
};

export default About;
