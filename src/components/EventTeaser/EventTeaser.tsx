/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import { isAfter, isBefore, parseISO } from 'date-fns';
import { isEmpty, isNil } from 'ramda';
import tw from 'twin.macro';

import Button from 'components/Button';
import Icon from 'components/Icon';
import { IconNames } from 'components/Icons/Icons';
import { linksWrapper } from 'styles';
import { Event } from 'types';
import { formatDate, getLangName } from 'utils';

type Props = {
  event: Event;
};

const EventTeaser = ({ event }: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <li
      itemScope
      itemType="https://schema.org/Event"
      tw="py-6 border-b grid sm:grid-cols-12 gap-6 border-blue"
    >
      <div tw="sm:col-span-8 lg:col-span-5">
        <h4 tw="text-base font-bold md:text-lg">{event.title}</h4>
        <div tw="mt-2 space-x-2">
          {event.types?.map(type => (
            <span
              tw="text-xs uppercase border px-1.5 py-0.5 border-blue"
              key={`event-type-${event.title}-${type}`}
            >
              <Icon name={type as IconNames} tw="mr-1 text-xs" />
              {t(`homepage.events.types.${type}`)}
            </span>
          ))}
        </div>
      </div>
      <div tw="sm:order-first sm:col-span-4 lg:col-span-2">
        {!isNil(event.date) && (
          <time
            tw="block text-base font-bold md:text-lg"
            dateTime={formatDate(event.date, 'yyyy-MM-dd')}
            itemProp="startDate"
          >
            {formatDate(event.date, 'd MMMM')}
          </time>
        )}
        {!isNil(event.date) && (
          <time
            tw="block mt-2 text-sm"
            dateTime={formatDate(event.date, 'HH:mm')}
            itemProp="startDate"
          >
            {formatDate(event.date, 'HH:mm')}
          </time>
        )}
        {!isNil(event.location) && (
          <p tw="text-sm" itemProp="location">
            {event.location}
          </p>
        )}
        {!isNil(event.language) && (
          <p tw="text-sm" itemProp="inLanguage">
            {getLangName(event.language)}
          </p>
        )}
      </div>
      {isNil(event.applyLink) && (
        <div
          itemScope
          itemProp="performer"
          itemType="https://schema.org/Person"
          tw="sm:col-span-8 lg:col-span-3"
          css={linksWrapper}
        >
          {!isNil(event.speakerName) && isNil(event.speakerLink) && (
            <p tw="text-sm" itemProp="name">
              {event.speakerName}
            </p>
          )}
          {!isNil(event.speakerName) && !isNil(event.speakerLink) && (
            <a
              href={event.speakerLink}
              target="_blank"
              tw="text-sm"
              itemProp="name"
              rel="noopener"
            >
              {event.speakerName}
            </a>
          )}
          {!isNil(event.speakerJob) && (
            <p itemProp="jobTitle" tw="mt-1 text-sm">
              {event.speakerJob}
            </p>
          )}
        </div>
      )}
      {!isNil(event.applyLink) && (
        <p tw="text-sm sm:col-span-8 lg:col-span-3">
          {t('homepage.events.apply_desc')}
        </p>
      )}
      {!isNil(event.subscriptionLink) &&
        !isEmpty(event.subscriptionLink) &&
        isNil(event.applyLink) &&
        !isNil(event.date) &&
        isAfter(parseISO(event.date), new Date()) && (
          <div tw="flex items-center sm:justify-end sm:col-span-4 lg:col-span-2">
            <Button
              as="a"
              target="_blank"
              rel="noopener"
              href={event.subscriptionLink}
              itemProp="url"
              scheme="blue"
            >
              {t('homepage.events.subscribe')}
            </Button>
          </div>
        )}
      {!isNil(event.applyLink) &&
        !isEmpty(event.applyLink) &&
        !isNil(event.date) &&
        isAfter(parseISO(event.date), new Date()) && (
          <div tw="flex items-center sm:justify-end sm:col-span-4 lg:col-span-2">
            <Button
              as="a"
              target="_blank"
              rel="noopener"
              href={event.applyLink}
              itemProp="url"
              scheme="blue"
            >
              {t('homepage.events.apply')}
            </Button>
          </div>
        )}
      {!isNil(event.youtubeLink) &&
        !isEmpty(event.youtubeLink) &&
        !isNil(event.date) &&
        isBefore(parseISO(event.date), new Date()) && (
          <div tw="flex items-center sm:justify-end sm:col-span-4 lg:col-span-2">
            <Button
              as="a"
              target="_blank"
              rel="noopener"
              href={event.youtubeLink}
              itemProp="url"
              scheme="outline"
              iconRight="youtube"
            >
              {t('homepage.events.replay')}
            </Button>
          </div>
        )}
    </li>
  );
};

export default EventTeaser;
