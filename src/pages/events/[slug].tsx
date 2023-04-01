import React, { ReactElement } from 'react';
import parse from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { GetStaticPaths, GetStaticProps } from 'next';
import { isNil } from 'ramda';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Sponsors from 'components/Sponsors';
import { Event } from 'types';
import { getEvent, getEvents, getLangName } from 'utils';

type Props = {
  event: Event;
};

const Home = ({ event }: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO />
      <h1 className="sr-only">{t('homepage.events.title')}</h1>

      <main
        className="max-w-3xl px-4 mx-auto my-20"
        itemScope
        itemType="https://schema.org/Event"
      >
        <h1
          className="text-xl font-bold col-span-2 md:text-xl lg:text-2xl"
          itemProp="name"
        >
          {event.title}
        </h1>
        <p className="mt-12">
          {
            parse(
              event.seoBody.replace(/\n/gm, '<br /><br />')
            ) as React.ReactNode
          }
        </p>
        <div className="mt-8 space-y-2">
          {!isNil(event.speakerName) && (
            <div
              itemScope
              itemProp="performer"
              itemType="https://schema.org/Person"
              className="flex items-baseline link space-x-4"
            >
              <h3 className="font-bold">{t('event.speaker')}</h3>
              {!isNil(event.speakerName) && isNil(event.speakerLink) && (
                <span itemProp="name">
                  {parse(event.speakerName) as ReactElement[]}
                </span>
              )}
              {!isNil(event.speakerName) && !isNil(event.speakerLink) && (
                <a
                  href={event.speakerLink}
                  target="_blank"
                  itemProp="name"
                  rel="noopener noreferrer"
                >
                  {parse(event.speakerName) as ReactElement[]}
                </a>
              )}
              {!isNil(event.speakerJob) && (
                <span itemProp="jobTitle" className="mt-1">
                  {parse(event.speakerJob) as ReactElement[]}
                </span>
              )}
            </div>
          )}
          {!isNil(event.language) && (
            <div
              itemProp="inLanguage"
              className="flex items-baseline space-x-4"
            >
              <h3 className="font-bold">{t('event.lang')}</h3>
              <p>
                {t('event.be_held')}
                {getLangName(event.language)}
              </p>
            </div>
          )}
          {!isNil(event.types) && (
            <div
              itemProp="inLanguage"
              className="flex items-baseline space-x-4"
            >
              <h3 className="font-bold">{t('event.who')}</h3>
              <p>
                {event.types?.map(type => (
                  <span key={`event-type-${event.title}-${type}`}>
                    {t(`homepage.events.types.${type}`)}
                  </span>
                ))}
              </p>
            </div>
          )}
          {!isNil(event.location) && (
            <div
              itemProp="inLanguage"
              className="flex items-baseline space-x-4"
            >
              <h3 className="font-bold">{t('event.where')}</h3>
              <p itemProp="location">
                {parse(event.location) as ReactElement[]}
              </p>
            </div>
          )}
        </div>

        <p className="mt-8">{t('event.youtube')}</p>

        <p className="mt-8">
          {
            parse(
              event.seoHashtags.replace(/\n/gm, '<br /><br />')
            ) as React.ReactNode
          }
        </p>
      </main>

      <Sponsors />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = await getEvent(params?.slug as string);
  return isNil(event)
    ? { notFound: true }
    : {
        props: {
          event,
        },
      };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events: Event[] = await getEvents();
  return {
    paths: events
      .filter(({ slug }) => !isNil(slug))
      .map(({ slug }) => ({ params: { slug: slug as string } })),
    fallback: false,
  };
};

export default Home;
