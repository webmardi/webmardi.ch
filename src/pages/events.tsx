import React, { useEffect, useState } from 'react';
import parse from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { format, isAfter, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import { groupBy, keys } from 'ramda';
import slugify from 'slugify';

import Button from 'components/Button';
import EventTeaser from 'components/EventTeaser';
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
  const [search, setSearch] = useState('');
  const [years, setYears] = useState<Record<string, Event[]>>({});

  useEffect(() => {
    setYears(
      groupBy(
        i => format(parseISO(i.date ?? ''), 'yyyy'),
        events
          .filter(i =>
            slugify(i?.title ?? '', { lower: true }).includes(
              slugify(search, { lower: true })
            )
          )
          .sort((a, b) =>
            isAfter(parseISO(b.date ?? ''), parseISO(a.date ?? '')) ? 1 : -1
          )
      )
    );
  }, [events, search]);

  return (
    <Layout>
      <SEO />
      <h1 className="sr-only">{t('homepage.events.title')}</h1>

      <main className="px-4 mx-auto mb-20 max-w-7xl">
        <section>
          <div className="mt-12 md:grid grid-cols-2 gap-6">
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

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <input
              name="search"
              type="text"
              className="w-full px-4 py-2 mt-12 mr-5 text-sm md:text-base placeholder-blue border-blue focus:ring-blue-dark focus:border-blue-dark"
              placeholder={t('homepage.events.search')}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {keys(years)
            .sort((a, b) => +b - +a)
            .map(year => (
              <div key={`year-${year}`}>
                <h3 className="pb-6 mt-12 text-lg font-bold border-b-4 md:text-xl border-blue">
                  {year}
                </h3>

                <ul>
                  {years[year].map(event => (
                    <EventTeaser
                      event={event}
                      key={`event-teaser-${event.title}`}
                    />
                  ))}
                </ul>
              </div>
            ))}
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
