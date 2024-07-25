import React, { useState } from 'react';
import styled from 'styled-components';
import IconLogo from '../icons/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faAt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { handleURLButtonClick } from '../../functions/global';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import { databases } from '../../appwrite';
import { ID } from 'appwrite';

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
    width: 50%;

    .contact-logo {
      position: relative;
      width: 20%;
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
    width: 50%;
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

        input[type='email'] {
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

const StyledVerticalSeparator = styled.div`
  position: absolute;
  top: 0;
  left: -250px;
  height: 1px;
  width: 100vw;
  border-top: 1px solid var(--light-black);
`;

// Contact Form which Handles event of submitting form
const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false); // for Snackbar Component
  const [errorMessage, setErrorMessage] = useState(''); // for Snackbar Component

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  // Handles snackbar open/close
  const handleClick = (message: string, resetEmail: boolean = true) => {
    setEmail(resetEmail ? '' : email);
    setErrorMessage(message);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // For snackbar action - Close button
  const action = (
    <React.Fragment>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <FontAwesomeIcon icon={faXmark} />
        {/* <CloseIcon fontSize='small' /> */}
      </IconButton>
    </React.Fragment>
  );

  // Handles form submission
  const handleContactForm = async (e: any) => {
    e.preventDefault();
    if (email === '') {
      handleClick('Please fill email', false);
      return;
    } else if (!emailRegex.test(email)) {
      handleClick('Please correct the Email Address', false);
      return;
    }

    // Sends request to Appwrite
    try {
      const response = await databases.createDocument(
        process.env.REACT_APP_APPWRITE_DATABASE_ID!,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID!,
        ID.unique(),
        {
          email_id: email,
        }
      );

      // On success, show success message
      if (response.$id.length > 0) {
        handleClick(`Thanks for contacting me, ${response.email_id}.`);
      }
    } catch (error: any) {
      // On error, show error message - 409 means email already exists
      if (error.code === 409) {
        handleClick('Thank you for contacting me. I already got your email.');
      } else {
        handleClick('Something went wrong.');
      }
    }
  };

  return (
    <form onSubmit={handleContactForm}>
      {/* Snackbar/Toast to show error message */}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={errorMessage}
        action={action}
      />
      <p>Stay connected w/ me.</p>
      <div className='email-div'>
        <input
          type='email'
          name='emailId'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        />
        <FontAwesomeIcon
          className='icon'
          icon={faArrowUp}
          onClick={handleContactForm}
        />
      </div>
    </form>
  );
};

const Contact = () => {
  return (
    <StyledContactSection id='contact'>
      <StyledVerticalSeparator />
      <div className='left-panel'>
        <div className='contact-logo'>
          <IconLogo />
        </div>
        <p>Yash Patel</p>
      </div>
      <div className='vertical-separator' />
      <div className='right-panel'>
        <div className='contact-form'>
          <ContactForm />
        </div>
        <div className='socials'>
          <div
            className='social-pin'
            onClick={handleURLButtonClick(
              'https://www.linkedin.com/in/yash-patel-dev/',
              true
            )}
          >
            <FontAwesomeIcon className='icon' icon={faLinkedinIn} />
          </div>
          <div
            className='social-pin'
            onClick={handleURLButtonClick(
              'https://www.linkedin.com/in/yash-patel-dev/',
              true
            )}
          >
            <FontAwesomeIcon className='icon' icon={faGithub} />
          </div>
          <div
            className='social-pin'
            onClick={handleURLButtonClick(
              'https://www.linkedin.com/in/yash-patel-dev/',
              true
            )}
          >
            <FontAwesomeIcon className='icon' icon={faAt} />
          </div>
        </div>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
