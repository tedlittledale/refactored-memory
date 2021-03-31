import { Provider } from "mobx-react";
import { useStore } from "../store";
import GlobalStyles from "../src/styles/globals/manifest";
import { ThemeProvider } from "styled-components";

import { theme } from "../src/styles/theme";
console.log({ theme });

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
