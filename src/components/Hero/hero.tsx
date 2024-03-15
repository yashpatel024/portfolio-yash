import React, { useEffect } from "react";
import { styled } from "styled-components";
import { motion, stagger, useAnimate } from "framer-motion";

const StyledHeroSection = styled.section`
  border: var(--dev-border);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 0 30px 4px;
    font-family: var(--font-mono);
    font-size: clamp(var(--fs-sm), 5vw, var(--fs-big));
    font-weight: 500;
    color: var(--white);
  }

  span {
    margin-top: 5px;
    line-height: 0.9;
  }
`;

const words =
  "Software Developer | Full-stack Enthusiast | Crafting Innovative Solutions in Java & JavaScript";

const Hero = (): JSX.Element => {
  const [scope, animate] = useAnimate();

  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const RenderKeyWords = (): JSX.Element => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, index) => {
          return <motion.span key={word + index}>{word} </motion.span>;
        })}
      </motion.div>
    );
  };
  return (
    <StyledHeroSection>
      <h1>Yash Patel</h1>
      <RenderKeyWords />
      
    </StyledHeroSection>
  );
};

export default Hero;
