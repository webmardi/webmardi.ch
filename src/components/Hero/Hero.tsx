import React from 'react';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import { closestIndexTo, isAfter, parseISO } from 'date-fns';
import { isNil } from 'ramda';
import tw from 'twin.macro';

import { Event } from 'types';
import { formatDate } from 'utils';

type Props = {
  events: Event[];
};

const Hero = ({ events }: Props): JSX.Element => {
  const { t } = useTranslation();
  const futureEvents = events.filter(
    i => !isNil(i.date) && isAfter(parseISO(i.date), new Date())
  );
  const nextEventId = closestIndexTo(
    new Date(),
    futureEvents.map(i => parseISO(i.date ?? ''))
  );
  const {
    title,
    date: rawDate,
    speakerName,
    speakerJob,
    location,
    subscriptionLink,
  } = futureEvents[nextEventId];
  const date = !isNil(rawDate) ? parseISO(rawDate) : '';

  return (
    <div tw="text-white bg-blue" itemScope itemType="https://schema.org/Event">
      <div tw="px-4 py-10 mx-auto border-b md:py-28 max-w-7xl border-blue-lighter grid md:grid-cols-3 gap-12 md:gap-6">
        <div tw="col-span-2">
          {!isNil(title) && (
            <h2 tw="text-lg font-bold md:text-xl lg:text-2xl" itemProp="name">
              {title}
            </h2>
          )}
          {!isNil(subscriptionLink) && (
            <a
              href={subscriptionLink}
              target="_blank"
              rel="noreferrer"
              tw="inline-block px-4 py-2 mt-8 text-lg font-bold border-none lg:text-xl lg:px-8 lg:py-3 hover:bg-white lg:mt-14 bg-cyan text-blue transition-colors focus:text-blue-dark hover:text-blue-lighter"
              itemProp="url"
            >
              {t('hero.register')}
            </a>
          )}
        </div>
        <div tw="md:order-first">
          {!isNil(date) && (
            <time
              tw="block text-lg font-bold md:text-xl text-cyan"
              dateTime={formatDate(date, 'yyyy-MM-dd')}
              itemProp="startDate"
            >
              {formatDate(date, 'd MMMM')}
            </time>
          )}
          {!isNil(date) && (
            <time
              tw="block mt-2"
              dateTime={formatDate(date, 'HH:mm')}
              itemProp="startDate"
            >
              {formatDate(date, 'HH:mm')}
            </time>
          )}
          {!isNil(location) && <p>{location}</p>}
          {!isNil(speakerName) && (
            <p
              tw="mt-10 text-lg font-bold md:text-xl text-cyan"
              itemScope
              itemProp="performer"
              itemType="https://schema.org/Person"
            >
              <span itemProp="name">{speakerName}</span>
            </p>
          )}
          {!isNil(speakerJob) && (
            <p tw="mt-2" itemProp="location">
              {speakerJob}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
