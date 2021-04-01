import { css } from "styled-components";

// -------------------------------------------------------------
// App.
// -------------------------------------------------------------
export const defaultHeading = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height, or 128% */

  letter-spacing: 1.63636px;
`;

export const defaultHeadingMobile = css`
  font-family: var(--font-heading-stack);
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 1.63636px;
`;

export const defaultBodyText = css`
  font-size: 14px;
  line-height: 18px;

  letter-spacing: 1.27273px;
`;

export const mobileBreakpoint = "900px";
export default css`
  body,
  html {
    min-height: 100vh;
  }
  /**
   * Reset.
   */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  hr,
  ul,
  ol,
  dl {
    margin-top: initial;
    margin-bottom: initial;
  }

  ol,
  ul {
    list-style: none;
    padding-left: initial;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: normal;
    font-family: var(--font-heading-stack);
    line-height: var(--font-heading-line-height);
  }

  /**
   * App.
   */
  body {
    ${defaultBodyText}
  }
  h1 {
    ${defaultHeading}
  }

  h2,
  h3 {
    ${defaultHeadingMobile}
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      ${defaultHeading}
    }
  }
`;
