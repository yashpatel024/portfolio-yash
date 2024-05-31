import { styled } from "styled-components";
import { ProfileBubbleHeadURL } from "../../constants/data";

const StyledHeroSection = styled.section`
  border: var(--dev-border);
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-style: normal;
  line-height: normal;

  img {
    aspect-ratio:1;
    max-width: 368px;
  }

  h1 {
    font-family: var(--font-sans);
    font-size: clamp(var(--fs-xxl), 5vw, var(--fs-big));
    font-weight: 700;
    color: var(--white);
  }

  .subtext-1 {
    margin: 10px 0 0 0;
    color: var(--white);
    font-family: var(--font-mono);
    font-size: var(--fs-xxl);
    font-weight: 400;
  }

  .tagline {
    margin: 24px 0 0 0;
    color: var(--white);
    font-family: var(--font-mono);
    font-size: var(--fs-md);
    font-weight: 300;
  }
`;

const BackgroundBlur = styled.div`
  position: absolute;
  align-self: center;
  margin-bottom: 20%;
  background: var(--light-blue);
  width: 358px;
  height: 358px;
  border-radius: 358px;
  filter: blur(255.4499969482422px);
  z-index: -10;
`

const words =
  "Software Developer | Full-stack Enthusiast";

const Hero = (): JSX.Element => {
  return (
    <StyledHeroSection id="hero">
      <img src="/assets/images/profileHead.png" alt="Profile Head"/>
      <h1>Yash Patel</h1>
      <p className="subtext-1">{words}</p>
      <p className="tagline">Crafting Innovative Solutions in Java & JavaScript</p>
      <BackgroundBlur />
    </StyledHeroSection>
  );
};

export default Hero;
