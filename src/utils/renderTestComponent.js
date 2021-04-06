import { ThemeProvider } from "styled-components";

import { theme } from "../src/styles/theme";
import { AppWrapper } from "../src/context/state";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState);

  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppWrapper>
  );
}

export default ({ theme, name }) =>
  render(
    <ThemeProvider theme={theme}>
      <HelloMessageStyled name={name} />
    </ThemeProvider>
  );
