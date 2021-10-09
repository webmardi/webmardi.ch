import React from 'react';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import Layout from 'components/Layout';

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1 tw="text-2xl font-bold text-center">{t('title')}</h1>
    </Layout>
  );
};

export default Home;
