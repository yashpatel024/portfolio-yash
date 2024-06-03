import React from "react";
import styled from "styled-components";
import { experiencesData } from "../../constants/data";

const StyledExperienceSection = styled.section`
  /* border: var(--dev-border); */
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
  font-style: normal;
  line-height: normal;
  padding: 0px 0;
  gap: 100px;
  position: relative;
  padding-bottom: 5%;
  gap: 80px;

  h2 {
    font-family: var(--font-sans);
    font-size: clamp(var(--fs-xxl), 3vw, var(--fs-4xl));
    font-weight: 500;
    color: var(--white);
    display: flex;
    align-self: flex-start;
  }
`;

const StyledExperience = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 550px;

  .card {
    position: relative;
    display: flex;
    width: 30%;
    height: 100%;
    border-radius: 30px;
    flex-direction: column;
    padding: 30px;
    color: var(--black);
    justify-content: space-between;

    .card-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      img {
        position: relative;
        width: 70px;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }

      p {
        font-family: var(--font-sans);
        font-size: var(--fs-md);
        font-weight: 500;
      }
    }

    .card-desc {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      overflow: hidden;

      .card-main-title {
        font-family: var(--font-sans);
        font-size: var(--fs-xxxl);
        font-weight: 700;
        margin: 0;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      .card-sub-title {
        font-family: var(--font-sans);
        font-size: var(--fs-xl);
        font-weight: 500;
        line-height: normal;
      }

      .card-body-text {
        font-family: var(--font-sans);
        font-size: var(--fs-md);
        font-weight: 400;
        line-height: normal;
        margin-bottom: 8px;
        height: 0;
        visibility: hidden;
        transition: height 2s 0.5s;
      }

      .card-tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
        width: 85%;
        gap: 5px;

        p {
          font-family: var(--font-sans);
          font-size: var(--fs-sm);
          font-weight: 500;
          border: 1px solid var(--black);
          border-radius: 20px;
          padding: 1px 15px;
        }
      }
    }

    &:hover {
      cursor: pointer;

      .card-body-text {
        visibility: visible;
        height: auto;
      }
    }
  }

  .card:nth-child(1) {
    background-color: var(--box-color-1);
  }
  .card:nth-child(2) {
    background-color: var(--box-color-2);
  }
  .card:nth-child(3) {
    background-color: var(--box-color-3);
  }
`;

const Experience = () => {
  return (
    <StyledExperienceSection id="experience">
      <h2>Where I’ve Worked</h2>
      <StyledExperience>
        {experiencesData.map((experience) => (
          <div className="card" id={experience.id}>
            <div className="card-header">
              <a href={experience.companyUrl} target="_blank" rel="noreferrer">
                <img
                  className="card-logo"
                  src={experience.icon}
                  alt="Company Logo"
                />
              </a>
              <p>{experience.date}</p>
            </div>
            <div className="card-desc">
              <h3 className="card-main-title">{experience.title}</h3>
              <a href={experience.companyUrl} target="_blank" rel="noreferrer">
                <p className="card-sub-title">{experience.company}</p>
              </a>
              <p className="card-body-text">{experience.description}</p>
              <div className="card-tags">
                {experience.skills.map((skill, i) => (
                  <p>{skill}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </StyledExperience>
    </StyledExperienceSection>
  );
};

export default Experience;
