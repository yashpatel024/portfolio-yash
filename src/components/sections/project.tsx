import React from "react";
import styled from "styled-components";
import LinkArrow from "../icons/linkArrow";
import GithubIcon from "../icons/githubIcon";

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
  padding-top: 12%;
  gap: 100px;
  position: relative;

  h2 {
    font-family: var(--font-sans);
    font-size: clamp(var(--fs-xxl), 3vw, var(--fs-xbig));
    font-weight: 500;
    color: var(--white);
    display: flex;
    align-self: flex-end;
  }
`;

const StyledProjects = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .project-card {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: var(--white);

    .project-details {
      position: relative;
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 25px;

      h3 {
        font-family: var(--font-mono);
        font-size: var(--fs-4xl);
        font-weight: 500;
        margin: 0;
      }

      .skill-tags {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
        width: 90%;
        gap: 10px;

        p {
          font-family: var(--font-mono);
          font-size: var(--fs-xl);
          font-weight: 3 0;
          border: 1px solid var(--white);
          border-radius: 20px;
          padding: 5px 10px;
        }
      }

      .project-description {
        font-family: var(--font-mono);
        font-size: var(--fs-xl);
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 15px;
      }

      .project-links {
        display: flex;
        position: relative;
        width: 100%;

        .link {
          display: flex;
          flex-direction: row;
          position: relative;
          justify-content: flex-start;

          .link-circle {
            display: flex;
            position: relative;
            width: 60px;
            height: 60px;
            border-radius: 100%;
            justify-content: center;
            z-index: 5;

            svg,
            .icon-circle {
              position: absolute;
              width: 50%;
              height: 40%;
              z-index: 6;
              display: flex;
              justify-content: center;
              align-self: center;
            }

            .icon-circle {
              background-image: url("/assets/images/github-icon.png"),
                linear-gradient(to right, white, white);
              background-size: 75px, 85%;
              background-position: center, center;
              background-repeat: no-repeat;
            }
          }

          .arrow-icon {
            position: absolute;
            left: 70%;
          }

          .link-circle:nth-child(1) {
            background-color: black;
            border: 1px solid white;
          }

          .link-circle:nth-child(2) {
            position: absolute;
            background-color: white;
          }
        }
      }
    }

    .project-images {
      position: relative;
      width: 55%;
    }
  }
`;

const Project = () => {
  return (
    <StyledProjectSection id="project">
      <h2>A Collection of Work</h2>
      <StyledProjects>
        <div className="project-card">
          <div className="project-details">
            <h3>Business Analytical Dashboard</h3>
            <div className="skill-tags">
              <p>TypeScript</p>
              <p>ReactJs</p>
              <p>NodeJs</p>
              <p>MySQL</p>
              <p>Firebase</p>
              <p>JEST</p>
              <p>NoSQL</p>
              <p>CRON</p>
            </div>
            <div className="project-description">
              <p>
                Led the Capstone Project to develop an analytics dashboard using
                the MERN stack deployed over Firebase creating a robust,
                visually appealing, and modular user interface.
              </p>
              <p>
                Recognized as the 'Best of Program' for innovative use of
                technology to visualize company performance data and the
                collaborative performance of the team.
              </p>
            </div>
            <div className="project-links">
              <div className="link">
                <div className="link-circle">
                  <div className="icon-circle"></div>
                </div>
                <div className="link-circle arrow-icon">
                  <LinkArrow />
                </div>
              </div>
            </div>
          </div>
          <div className="project-images"></div>
        </div>
      </StyledProjects>
    </StyledProjectSection>
  );
};

export default Project;
