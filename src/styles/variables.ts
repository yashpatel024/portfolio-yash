import { css } from 'styled-components';

const variables = css`
  :root {
    // palette: https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd
    // One more we can use: https://www.awwwards.com/sites/spotify-x-pitchfork-inside-discovery-1#typography
    // Background to Foreground
    --black: rgba(0, 0, 0, 1);
    --gray: rgba(118, 118, 118, 1);
    --white: rgba(255, 255, 255, 1);
    --light-blue: rgba(82, 110, 255, 1);
    --background-black: rgba(11, 11, 11, 1);
    --light-black: rgba(33, 33, 33, 1);
    --box-color-1: #F5F378;
    --box-color-2: #DCC1FF;
    --box-color-3: #FFFFFF;
    
    // Import Manual fonts s
    --font-sans: 'Montserrat', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'Inconsolata', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    // Font sizes
    --fs-xxs: 12px;
    --fs-xs: 13px;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fs-lg: 18px;
    --fs-xl: 20px;
    --fs-xxl: 24px;
    --fs-xxxl: 30px;
    --fs-4xl: 36px;
    --fs-5xl: 42px;
    --fs-xbig: 70px;
    --fs-big: 76px;
    --fs-heading: 32px;

    // Development Border
    --dev-border: 1px solid red;

    // General Transition
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0 0 10px 0;
      font-weight: 600;
      color: var(--lightest-slate);
      line-height: 1.1;
    }

    p {
      margin:0;
    }
  }
`;

export default variables;