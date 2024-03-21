import { styled } from "styled-components";

const StyledHeroSection = styled.section`
  /* border: var(--dev-border); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  h1 {
    margin: 0 0 30px 4px;
    font-family: var(--font-mono);
    font-size: clamp(var(--fs-sm), 5vw, var(--fs-big));
    font-weight: 500;
    color: var(--white);
  }

  h3 {
    margin-top: 10px;
    line-height: 0.9;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    
  }
`;

const words =
  "Software Developer | Full-stack Enthusiast | Crafting Innovative Solutions in Java & JavaScript";

const Hero = (): JSX.Element => {
  
  return (
    <StyledHeroSection id="hero">
      <h1>Yash Patel</h1>
      <h3>{words}</h3>
      <div className="buttons">
        <button>Hire Me</button>
        <button>Contact</button>
      </div>      
    </StyledHeroSection>
  );
};

export default Hero;
