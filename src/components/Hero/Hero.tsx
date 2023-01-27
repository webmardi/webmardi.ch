import React, { ReactElement } from 'react';
import parse from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { closestIndexTo, endOfDay, isAfter, parseISO } from 'date-fns';
import { isNil } from 'ramda';

import Button from 'components/Button';
import { Event } from 'types';
import { formatDate, getLangName } from 'utils';

type Props = {
  events: Event[];
};

const Hero = ({ events }: Props): JSX.Element => {
  const { t } = useTranslation();
  const futureEvents = events.filter(
    i => !isNil(i.date) && isAfter(endOfDay(parseISO(i.date)), new Date())
  );
  const nextEventId = closestIndexTo(
    new Date(),
    futureEvents.map(i => parseISO(i.date ?? ''))
  );
  if (
    isNil(nextEventId) &&
    isNil(futureEvents[nextEventId as unknown as number])
  ) {
    return <span />; // Just in case...
  }

  const {
    title,
    date: rawDate,
    speakerName,
    speakerJob,
    location,
    language,
    subscriptionLink,
  } = futureEvents[nextEventId as unknown as number];
  const date = !isNil(rawDate) ? parseISO(rawDate) : '';

  return (
    <section
      className="text-white bg-blue"
      itemScope
      itemType="https://schema.org/Event"
    >
      <div className="px-4 py-10 mx-auto border-b md:py-28 max-w-7xl border-blue-lighter grid md:grid-cols-3 gap-12 md:gap-6">
        <div className="col-span-2">
          {!isNil(title) && (
            <h2
              className="text-lg font-bold md:text-xl lg:text-2xl"
              itemProp="name"
            >
              {title}
            </h2>
          )}
          {!isNil(subscriptionLink) && (
            <div className="mt-8 lg:mt-14">
              <Button
                as="a"
                target="_blank"
                rel="noopener"
                href={subscriptionLink}
                itemProp="url"
                size="lg"
                scheme="cyan"
              >
                {t('hero.register')}
              </Button>
            </div>
          )}
        </div>
        <div className="md:order-first">
          {!isNil(date) && (
            <time
              className="block text-lg font-bold md:text-xl text-cyan"
              dateTime={formatDate(date, 'yyyy-MM-dd')}
              itemProp="startDate"
            >
              {formatDate(date, 'd MMMM')}
            </time>
          )}
          {!isNil(date) && (
            <time
              className="block mt-2"
              dateTime={formatDate(date, 'HH:mm')}
              itemProp="startDate"
            >
              {formatDate(date, 'HH:mm')}
            </time>
          )}
          {!isNil(location) && (
            <p itemProp="location">{parse(location) as ReactElement[]}</p>
          )}
          {!isNil(language) && (
            <p itemProp="inLanguage">{getLangName(language)}</p>
          )}
          <div
            itemScope
            itemProp="performer"
            itemType="https://schema.org/Person"
          >
            {!isNil(speakerName) && (
              <p
                className="mt-10 text-lg font-bold md:text-xl text-cyan"
                itemProp="name"
              >
                {parse(speakerName) as ReactElement[]}
              </p>
            )}
            {!isNil(speakerJob) && (
              <p itemProp="jobTitle" className="mt-2">
                {parse(speakerJob) as ReactElement[]}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
