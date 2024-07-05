import React, { useState } from "react";
import styled from "styled-components";
import IconLogo from "../icons/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faAt } from "@fortawesome/free-solid-svg-icons";
import { handleURLButtonClick } from "../../functions/global";

const StyledContactSection = styled.section`
  /* border: var(--dev-border); */

  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  font-style: normal;
  line-height: normal;
  padding: 0px 0;
  position: relative;
  gap: 100px;

  .vertical-separator {
    position: relative;
    height: 150px;
    width: 1px;
    border: 1px solid var(--light-black);
    margin: 0;
  }

  .left-panel {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 10%;
    position: relative;
    width: 30%;

    .contact-logo {
      position: relative;
      width: 30%;
    }

    p {
      position: relative;
      width: 30%;
      font-weight: 700;
      font-size: var(--fs-5xl);
      word-wrap: break-word;
    }
  }

  .right-panel {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    width: 69%;
    justify-content: center;
    gap: 15px;

    form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 15px;

      p {
        font-weight: 500;
        font-size: var(--fs-xxxl);
      }

      .email-div {
        display: flex;
        flex-direction: row;
        gap: 0;
        align-items: center;

        input[type="email"] {
          border: none;
          border-bottom: 2px solid var(--light-black);
          font-weight: 500;
          font-size: var(--fs-lg);
          padding: 10px 7px;
          background: transparent;
          outline: none;
          color: var(--white);
          width: 280px;
          transition: ease 0.25s;
        }

        .icon {
          rotate: 45deg;
          padding: 10px 7px;
          font-size: var(--fs-xxl);
          cursor: pointer;
        }
      }
    }

    .socials {
      display: flex;
      flex-direction: row;
      position: relative;
      width: 70%;
      justify-content: flex-start;
      gap: 30px;
      cursor: pointer;
      margin-top: 5px;

      .icon {
        font-size: 30px;
        line-height: 60px;
        transition: 0.3s;

        &:hover {
          transform: translate(0, -10%);
        }
      }
    }
  }
`;

// Contact Form which Handles event of submitting form
const ContactForm = () => {
  const [email, setEmail] = useState("");

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  const handleContactForm = (e: any) => {
    e.preventDefault();
    if(email === "") {
      alert("Don't leave it empty");
    }

    if (!emailRegex.test(email)) {
      alert("Please correct the Email Address");
    }
    
    setEmail("");
  };

  return (
    <form onSubmit={handleContactForm}>
      <p>Stay connected w/ me.</p>
      <div className="email-div">
        <input
          type="email"
          name="emailId"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <FontAwesomeIcon
          className="icon"
          icon={faArrowUp}
          onClick={handleContactForm}
        />
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <div className="left-panel">
        <div className="contact-logo">
          <IconLogo />
        </div>
        <p>Yash Patel</p>
      </div>
      <div className="vertical-separator" />
      <div className="right-panel">
        <div className="contact-form">
          <ContactForm />
        </div>
        <div className="socials">
          <div
            className="social-pin"
            onClick={handleURLButtonClick(
              "https://www.linkedin.com/in/yash-patel-dev/",
              true
            )}
          >
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
          </div>
          <div
            className="social-pin"
            onClick={handleURLButtonClick(
              "https://www.linkedin.com/in/yash-patel-dev/",
              true
            )}
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </div>
          <div
            className="social-pin"
            onClick={handleURLButtonClick(
              "https://www.linkedin.com/in/yash-patel-dev/",
              true
            )}
          >
            <FontAwesomeIcon className="icon" icon={faAt} />
          </div>
        </div>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
