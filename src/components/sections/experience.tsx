import React from 'react';
import styled from 'styled-components';
import { experiencesData } from '../../constants/data';

const StyledExperienceSection = styled.section`
  /* border: var(--dev-border); */
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  font-style: normal;
  line-height: normal;
  padding: 0px 0;
  gap: 100px;
  position: relative;
  padding: 0px 0;
  padding-top: 12%;
  gap: 80px;

  h2 {
    font-family: var(--font-sans);
    font-size: clamp(var(--fs-xxl), 3vw, var(--fs-xbig));
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
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 6vh;
  
  .card {
    position: relative;
    display: flex;
    width: 30%;
    height: clamp(500px, 60vh, 600px);
    border-radius: 30px;
    flex-direction: column;
    padding: 30px;
    color: var(--white);
    justify-content: space-between;
    border: 1px solid var(--white);
    border-color: var(--light-black);

    .card-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      img {
        position: relative;
        width: 60px;
        height: auto;
        -webkit-filter: grayscale(50%);
        filter: drop-shadow(5px 5px 10px var(--light-blue)) invert(15%);

      }

      p {
        font-family: var(--font-sans);
        font-size: var(--fs-md);
        font-weight: 500;
        color: var(--light-gray);
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
        color: var(--light-white);
      }

      .card-tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
        width: 85%;
        gap: 5px;
        color: var(--gray);

        p {
          font-family: var(--font-sans);
          font-size: var(--fs-sm);
          font-weight: 500;
          border: 1px solid var(--gray);
          border-radius: 20px;
          padding: 1px 15px;
        }
      }
    }
  }

  .card:hover {
    box-shadow: 10 10 10px var(--light-black);

    .card-body-text {
      visibility: visible;
      height: auto;
    }


  }

  /* .card:nth-child(3n) {
    border-color: var(--light-blue);
  }
  .card:nth-child(3n+1) {
    border-color: var(--light-black);
  }
  .card:nth-child(3n+2) {
    border-color: var(--gray);
  } */
`;

const Experience = () => {

  return (
    <StyledExperienceSection id='experience'>
      <h2>Where I’ve Worked</h2>
      <StyledExperience>
        {experiencesData.map((experience) => (
          <div className='card' id={experience.id}>
            <div className='card-header'>
              <a href={experience.companyUrl} target='_blank' rel='noreferrer'>
                <img
                  className='card-logo'
                  src={experience.icon}
                  alt='Company Logo'
                />
              </a>
              <p>{experience.date}</p>
            </div>
            <div className='card-desc'>
              <h3 className='card-main-title'>{experience.title}</h3>
              <a href={experience.companyUrl} target='_blank' rel='noreferrer'>
                <p className='card-sub-title'>{experience.company}</p>
              </a>
              <p className='card-body-text'>{experience.description}</p>
              <div className='card-tags'>
                {experience.skills && experience.skills.map((skill, i) => (
                  <p key={i}>{skill}</p>
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
