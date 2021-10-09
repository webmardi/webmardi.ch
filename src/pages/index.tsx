import React from 'react';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import { GetStaticProps } from 'next';
import tw from 'twin.macro';

import Hero from 'components/Hero';
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
      <h1 tw="sr-only">{t('homepage.title')}</h1>
      <Hero events={events} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getEvents();
  return { props: { events } };
};

export default Home;
