import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { css, jsx } from '@emotion/react';
import { isAfter, isBefore, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import { isNil } from 'ramda';
import tw from 'twin.macro';

import Button from 'components/Button';
import Carousel from 'components/Carousel';
import EventTeaser from 'components/EventTeaser';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Sponsors from 'components/Sponsors';
import { linksWrapper } from 'styles';
import { Event } from 'types';
import { getEvents } from 'utils';

type Props = {
  events: Event[];
};

const Home = ({ events }: Props): JSX.Element => {
  const { t } = useTranslation();
  const [viewMore, setViewMore] = useState(false);

  const futureEvents = events
    .filter(i => !isNil(i.date) && isAfter(parseISO(i.date), new Date()))
    .sort((a, b) =>
      isAfter(parseISO(b.date ?? ''), parseISO(a.date ?? '')) ? -1 : 1
    );

  const pastEvents = events
    .filter(i => !isNil(i.date) && isBefore(parseISO(i.date), new Date()))
    .sort((a, b) =>
      isAfter(parseISO(b.date ?? ''), parseISO(a.date ?? '')) ? 1 : -1
    )
    .slice(0, viewMore ? Infinity : 1);

  return (
    <Layout>
      <SEO />
      <h1 tw="sr-only">{t('homepage.title')}</h1>

      <Hero events={events} />

      <main tw="px-4 mx-auto mb-20 max-w-7xl">
        <section>
          <div tw="mt-12 md:mt-28 md:grid grid-cols-2 gap-6">
            <h2
              tw="text-xl font-bold col-span-2 md:text-xl lg:text-2xl"
              itemProp="name"
            >
              {t('homepage.about.title')}
            </h2>
            <p tw="mt-2">{t('homepage.about.content')}</p>
            <div tw="mt-6 md:text-right md:mt-0">
              <Button
                as="a"
                target="_blank"
                rel="noreferrer"
                href={t('homepage.about.instagram_link')}
                itemProp="url"
                iconRight="instagram"
              >
                {t('homepage.about.follow_us')}
              </Button>
            </div>
          </div>

          <div tw="mt-14">
            <Carousel />
          </div>
        </section>

        <section>
          <div tw="mt-12 md:mt-28 md:grid grid-cols-2 gap-6">
            <h2
              tw="text-xl font-bold col-span-2 md:text-xl lg:text-2xl"
              itemProp="name"
            >
              {t('homepage.events.title')}
            </h2>
            <p
              tw="mt-2"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: t('homepage.events.content') }}
              css={linksWrapper}
            />
            <div tw="mt-6 md:text-right md:mt-0">
              <Button
                as="a"
                target="_blank"
                rel="noreferrer"
                href={t('homepage.events.meetup_link')}
                itemProp="url"
              >
                {t('homepage.events.view_on_meetup')}
              </Button>
            </div>
          </div>

          <h3 tw="pb-6 mt-10 text-lg font-bold border-b-4 md:text-xl border-blue">
            {t('homepage.events.upcoming')}
          </h3>

          <ul>
            {futureEvents.map(event => (
              <EventTeaser event={event} key={`event-teaser-${event.title}`} />
            ))}
          </ul>

          <h3 tw="pb-6 mt-16 text-lg font-bold border-b-4 md:text-xl border-blue">
            {t('homepage.events.past')}
          </h3>

          <ul>
            {pastEvents.map(event => (
              <EventTeaser event={event} key={`event-teaser-${event.title}`} />
            ))}
          </ul>

          {!viewMore && (
            <Button tw="mt-8" onClick={() => setViewMore(true)}>
              {t('homepage.events.view_more')}
            </Button>
          )}
        </section>
      </main>

      <Sponsors />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getEvents();
  return { props: { events } };
};

export default Home;
