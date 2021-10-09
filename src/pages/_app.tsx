import React, { useEffect } from 'react';
import i18next from 'i18next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { GlobalStyles } from 'twin.macro';

import 'locales/i18n';

import 'assets/css/font.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { locale } = useRouter();

  useEffect(() => {
    i18next.changeLanguage(locale as string);
  }, [locale]);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
