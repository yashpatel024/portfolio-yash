import { css } from 'styled-components';

const variables = css`
  :root {
    // palette: https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd
    // One more we can use: https://www.awwwards.com/sites/spotify-x-pitchfork-inside-discovery-1#typography
    // Background to Foreground
    --black: #000;
    --gray: #9c9c9c;
    --white: #fff;
    --rich-black: #0D1B2A;
    --oxford-blue: #1B263B;
    --yinmn-blue: #415A77;
    --silver-lake-blue: #778DA9;
    --platinum: #E0E1DD;

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
    --fs-xxl: 22px;
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
  }
`;

export default variables;