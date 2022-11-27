import React from 'react';
import parse from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { isAfter, isBefore, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { isNil } from 'ramda';

import Button from 'components/Button';
import Carousel from 'components/Carousel';
import EventTeaser from 'components/EventTeaser';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Sponsors from 'components/Sponsors';
import { Event } from 'types';
import { getEvents } from 'utils';

type Props = {
  events: Event[];
};

const Home = ({ events }: Props): JSX.Element => {
  const { t } = useTranslation();

  const futureEvents = events
    .filter(i => !isNil(i.date) && isAfter(parseISO(i.date), new Date()))
    .sort((a, b) =>
      isAfter(parseISO(b.date ?? ''), parseISO(a.date ?? '')) ? -1 : 1
    );

  const pastEvents = events
    .filter(i => !isNil(i.date) && isBefore(parseISO(i.date), new Date()))
    .sort((a, b) =>
      isAfter(parseISO(b.date ?? ''), parseISO(a.date ?? '')) ? 1 : -1
    );

  return (
    <Layout>
      <SEO />
      <Hero events={events} />

      <main className="px-4 mx-auto mb-20 max-w-7xl">
        <section>
          <div className="mt-12 md:mt-28 md:grid grid-cols-2 gap-6">
            <h1
              className="text-xl font-bold col-span-2 md:text-xl lg:text-2xl"
              itemProp="name"
            >
              {t('homepage.about.title')}
            </h1>
            <p className="mt-2">{t('homepage.about.content')}</p>
            <div className="mt-6 md:text-right md:mt-0">
              <Button
                as="a"
                target="_blank"
                rel="noopener"
                href={t('homepage.about.instagram_link')}
                itemProp="url"
                iconRight="instagram"
              >
                {t('homepage.about.follow_us')}
              </Button>
            </div>
          </div>

          <div className="mt-14">
            <Carousel />
          </div>
        </section>

        <section>
          <div className="mt-12 md:mt-28 md:grid grid-cols-2 gap-6">
            <h2
              className="text-xl font-bold col-span-2 md:text-xl lg:text-2xl"
              itemProp="name"
            >
              {t('homepage.events.title')}
            </h2>
            <p className="mt-2 link">
              {parse(t('homepage.events.content')) as unknown as string}
            </p>
            <div className="mt-6 md:text-right md:mt-0">
              <Button
                as="a"
                target="_blank"
                rel="noopener"
                href={t('homepage.events.meetup_link')}
                itemProp="url"
              >
                {t('homepage.events.view_on_meetup')}
              </Button>
            </div>
          </div>

          <h3 className="pb-6 mt-10 text-lg font-bold border-b-4 md:text-xl border-blue">
            {t('homepage.events.upcoming')}
          </h3>

          <ul>
            {futureEvents.map(event => (
              <EventTeaser event={event} key={`event-teaser-${event.title}`} />
            ))}
          </ul>

          <h3 className="pb-6 mt-16 text-lg font-bold border-b-4 md:text-xl border-blue">
            {t('homepage.events.past')}
          </h3>

          <ul>
            {pastEvents.slice(0, 2).map(event => (
              <EventTeaser event={event} key={`event-teaser-${event.title}`} />
            ))}
          </ul>

          <Button as={Link} className="mt-8" href="/events">
            {t('homepage.events.view_more')}
          </Button>
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
