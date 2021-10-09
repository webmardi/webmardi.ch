import React from 'react';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import { GetStaticProps } from 'next';
import tw from 'twin.macro';

import Button from 'components/Button';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import { Event } from 'types';
import { getEvents } from 'utils';

type Props = {
  events: Event[];
};

const Home = ({ events }: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1 tw="sr-only">{t('homepage.title')}</h1>

      <Hero events={events} />

      <main tw="px-4 mx-auto mb-20 max-w-7xl">
        <section tw="mt-28 grid grid-cols-2 gap-6">
          <h2
            tw="text-lg font-bold col-span-2 md:text-xl lg:text-2xl"
            itemProp="name"
          >
            {t('homepage.about.title')}
          </h2>
          <p tw="mt-2">{t('homepage.about.content')}</p>
          <div tw="text-right">
            <Button
              as="a"
              target="_blank"
              rel="noreferrer"
              href="http://google.com"
              itemProp="url"
              iconRight="instagram"
            >
              {t('homepage.about.follow_us')}
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getEvents();
  return { props: { events } };
};

export default Home;
