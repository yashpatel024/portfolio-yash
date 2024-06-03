import { styled } from "styled-components";
import AboutTaglineIcon from "../icons/aboutTaglineIcon";

const StyledAboutSection = styled.section`
  /* border: var(--dev-border); */

  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-style: normal;
  line-height: normal;
  padding: 0px 0;
  gap: 100px;
  position: relative;

  hr {
    width: 100%;
    border-width: 0px;
    height: 1px;
    background-color: var(--light-black);
    margin: 0;
  }
`;

const StyledTagline = styled.div`
  /* border: var(--dev-border); */
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin: 0px;
    color: var(--white);
    font-family: var(--font-sans);
    font-size: var(--fs-big);
    font-weight: 500;
    word-wrap: normal;
    width: fit-content;
  }

  .second-tagline {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;

    svg {
      position: relative;
      margin-left: 10px;
      top: -6px;
      aspect-ratio: 1;
      height: 65px;
    }
  }
`;

const StyledInfoSection = styled.div`
  /* border: var(--dev-border); */
  position: relative;
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;

  .profile-image-div {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 45%;
    border-radius: 150px;
    background-color: var(--black);
    justify-content: space-around;
    align-items: center;
    gap: 5%;

    .profile-image {
      position: relative;
      width: 150px;
      height: 100%;
      clip-path: border-box;
      overflow: hidden;
      display: flex;
      justify-content: center;

      img {
        position: absolute;
        width: 125%;
        height: 130%;
        top: 25px;
      }
    }

    .black-matter-image {
      position: relative;
      width: 85px;
      aspect-ratio: 1;
    }
  }

  p {
    display: flex;
    word-wrap: break-word;
    position: relative;
    width: 45%;
    font-size: var(--fs-xl);
  }
`;

const About = (): JSX.Element => {
  return (
    <StyledAboutSection id="about">
      <StyledTagline>
        <span className="first-tagline">
          <p>Innovative by Design,</p>
        </span>
        <span className="second-tagline">
          <p>Developer by Nature</p>
          <AboutTaglineIcon />
        </span>
      </StyledTagline>
      <hr />
      <StyledInfoSection>
        <div className="profile-image-div">
          <div className="profile-image">
            <img
              className="profile-image"
              src="/assets/images/profile-photo.png"
              alt="displays face of yash"
            />
          </div>
          <img
            className="black-matter-image"
            src="/assets/images/black-matter-gif.gif"
            alt="gif of black matter"
          />
        </div>
        <p>
          I'm Yash Patel, a full-stack developer with expertise in Java,
          JavaScript, and Python. With experience at Agfa Healthcare and a
          strong educational background in technology, I've honed my skills in
          React.js, Node.js, and agile development. I'm passionate about
          creating innovative solutions and delivering exceptional results.
        </p>
      </StyledInfoSection>
    </StyledAboutSection>
  );
};

export default About;
