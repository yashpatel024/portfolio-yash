import React from "react";
import styled from "styled-components";

const StyledProjectSection = styled.section`
  border: var(--dev-border);
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  font-style: normal;
  line-height: normal;
  padding: 0px 0;
  padding-top: 10%;
  gap: 100px;
  position: relative;

  h2 {
    font-family: var(--font-sans);
    font-size: clamp(var(--fs-xxl), 3vw, var(--fs-4xl));
    font-weight: 500;
    color: var(--white);
    display: flex;
    align-self: flex-start;
  }
`;

const StyledProjects = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .project {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: var(--white);

    .project-details{
      position: relative;
      width: 40%;
      border: var(--dev-border);
      
      h3 {
        font-family: var(--font-sans);
        font-size: var(--fs-xxxl);
        font-weight: 500;
        margin: 0;
      }

      .skill-tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
        width: 85%;
        gap: 5px;

        p {
          font-family: var(--font-sans);
          font-size: var(--fs-lg);
          font-weight: 3  00;
          border: 1px solid var(--white);
          border-radius: 20px;
          padding: 1px 15px;
        }
      }
    }

    .project-images{
      position: relative;
      width: 55%;
      border: var(--dev-border);
    }
  }
`

const Project = () => {
  return (
    <StyledProjectSection id="project">
      <h2>Projects</h2>
      <StyledProjects>
        <div className="project">
          <div className="project-details">
            <h3>Business Analytical Dashboard</h3>
            <div className="skill-tags">
              <p>TypeScript</p>
              <p>ReactJs</p>
              <p>NodeJs</p>
              <p>Firebase</p>
              <p>MySQL</p>
              <p>NoSQL</p>
              <p>Automation</p>
            </div>
          </div>
          <div className="project-images">

          </div>
        </div>
      </StyledProjects>
    </StyledProjectSection>
  );
};

export default Project;
