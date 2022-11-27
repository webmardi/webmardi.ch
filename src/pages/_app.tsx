import React, { useEffect } from 'react';
import i18next from 'i18next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import 'locales/i18n';

import 'styles/base.css';
import 'assets/css/fonts.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { locale } = useRouter();

  useEffect(() => {
    i18next.changeLanguage(locale as string);
  }, [locale]);

  return <Component {...pageProps} />;
};

export default App;
