import type { AppProps } from 'next/app';

import GlobalStyle from '../componets/globalstyles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};
export default App;
