import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../componets/globalstyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#5A4AF4",
    secondary: "#EBE9FE",
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
export default App;
