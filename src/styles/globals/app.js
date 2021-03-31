import { css } from "styled-components";

// -------------------------------------------------------------
// App.
// -------------------------------------------------------------
export const defaultHeading = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  letter-spacing: 1.27273px;
`;

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
    font-size: 14px;
    line-height: 18px;
    /* or 129% */

    letter-spacing: 1.27273px;
  }
  h1 {
    ${defaultHeading}
  }
`;
