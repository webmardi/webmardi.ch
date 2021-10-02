import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';

import 'assets/css/font.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
