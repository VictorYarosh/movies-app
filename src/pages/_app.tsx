import type { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import GlobalStyle from '../componets/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#EBE9FE',
    secondary: '#EBE9FE',
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
