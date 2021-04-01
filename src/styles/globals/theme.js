import { css } from "styled-components";

// - Use HSL or HSLA everywhere
// - Exceptions: `black` or `white`

// -------------------------------------------------------------
// Themes.
// -------------------------------------------------------------

const lightTheme = css`
  --color-background: #f2f2f2;
  --color-content: #000;
  --color-content-lighter: #222222;
  --color-content-darkbg: #fff;
  --color-black: #000;
  --color-borders: #d8d8d8;
  --color-red: #fc7c3a;
`;
/* At the moment this is the same as light theme */
const darkTheme = css`
  --color-pagecontent: hsl(209, 61%, 16%);
  --color-pagecontent-faded: hsl(0, 0%, 50%);
  --color-page-overscroll: hsl(0, 0%, 100%);
  --color-selection-foreground: hsl(0, 0%, 100%);
  --color-selectionbackground: hsl(210, 36%, 96%);
  --color-textdefault: hsl(209, 61%, 16%);
  --color-faint: hsl(212, 33%, 89%);
  --color-faint-transparent: hsla(212, 33%, 89%, 0.5);
  --color-highlight: hsl(184, 77%, 34%);
`;

export default css`
  /* 1. Light mode by default. */
  :root {
    --hue-accent: 240;
    --color-accent: hsl(var(--hue-accent), 100%, 50%);

    --typographic-rhythm: 62.5%;
    --typographic-size: 1.6em;

    --font-body-stack: "Mulish", sans-serif;
    --font-body-line-height: 1.4;
    --font-heading-stack: "Fahkwang", sans-serif;
    --font-heading-line-height: 1.4 ${lightTheme};

    --color-font-highlight: hsl(360, 92%, 20%);
    @keyframes highlightFlash {
      from {
        background: hsl(360, 77%, 78%);
      }
      to {
        background: transparent;
      }
    }
  }

  /* 2. Check user preference. */
  @media (prefers-color-scheme: dark) {
    :root {
      ${lightTheme};
    }
  }

  /* 3. Then, check if the user opted-in a specific theme. */
  html[data-theme="light"] {
    ${lightTheme};
  }

  html[data-theme="dark"] {
    ${darkTheme};
  }
`;
