import React from 'react';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import { GetStaticProps } from 'next';
import tw from 'twin.macro';

import Layout from 'components/Layout';
import { Event } from 'types';
import { getEvents } from 'utils';

type Props = {
  events: Event[];
};

const Home = ({ events }: Props): JSX.Element => {
  const { t } = useTranslation();
  console.log('events', events);

  return (
    <Layout>
      <h1 tw="text-2xl font-bold text-center">{t('title')}</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getEvents();
  return { props: { events } };
};

export default Home;
