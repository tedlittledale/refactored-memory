import GlobalStyles from "../src/styles/globals/manifest";
import { ThemeProvider } from "styled-components";

import { theme } from "../src/styles/theme";
import { AppWrapper } from "../src/context/state";

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppWrapper>
  );
}
