import { css } from 'styled-components';

const variables = css`
  :root {
    // palette: https://coolors.co/palette/0d1b2a-1b263b-415a77-778da9-e0e1dd
    // Background to Foreground
    --rich-black: #0D1B2A;
    --oxford-blue: #1B263B;
    --yinmn-blue: #415A77;
    --silver-lake-blue: #778DA9;
    --platinum: #E0E1DD;

    // Import Manual fonts 
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
    --fs-heading: 32px;

    // General Transition
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default variables;