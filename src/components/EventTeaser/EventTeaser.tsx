/* eslint-disable react/jsx-no-target-blank */
import React, { ReactElement } from 'react';
import parse from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { isAfter, isBefore, parseISO } from 'date-fns';
import { isEmpty, isNil } from 'ramda';

import Button from 'components/Button';
import Icon from 'components/Icon';
import { IconNames } from 'components/Icons/Icons';
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
      className="py-6 border-b grid sm:grid-cols-12 gap-6 border-blue"
    >
      <div className="sm:col-span-8 lg:col-span-5">
        <h4 className="text-base font-bold md:text-lg">{event.title}</h4>
        <div className="mt-2 space-x-2">
          {event.types?.map(type => (
            <span
              className="text-xs uppercase border px-1.5 py-0.5 border-blue"
              key={`event-type-${event.title}-${type}`}
            >
              <Icon name={type as IconNames} className="mr-1 text-xs" />
              {t(`homepage.events.types.${type}`)}
            </span>
          ))}
        </div>
      </div>
      <div className="sm:order-first sm:col-span-4 lg:col-span-2">
        {!isNil(event.date) && (
          <time
            className="block text-base font-bold md:text-lg"
            dateTime={formatDate(event.date, 'yyyy-MM-dd')}
            itemProp="startDate"
          >
            {formatDate(event.date, 'd MMMM')}
          </time>
        )}
        {!isNil(event.date) && (
          <time
            className="block mt-2 text-sm"
            dateTime={formatDate(event.date, 'HH:mm')}
            itemProp="startDate"
          >
            {formatDate(event.date, 'HH:mm')}
          </time>
        )}
        {!isNil(event.location) && (
          <p className="text-sm" itemProp="location">
            {parse(event.location) as ReactElement[]}
          </p>
        )}
        {!isNil(event.language) && (
          <p className="text-sm" itemProp="inLanguage">
            {getLangName(event.language)}
          </p>
        )}
      </div>
      {isNil(event.applyLink) && (
        <div
          itemScope
          itemProp="performer"
          itemType="https://schema.org/Person"
          className="sm:col-span-8 lg:col-span-3 link"
        >
          {!isNil(event.speakerName) && isNil(event.speakerLink) && (
            <p className="text-sm" itemProp="name">
              {parse(event.speakerName) as ReactElement[]}
            </p>
          )}
          {!isNil(event.speakerName) && !isNil(event.speakerLink) && (
            <a
              href={event.speakerLink}
              target="_blank"
              className="text-sm"
              itemProp="name"
              rel="noopener"
            >
              {parse(event.speakerName) as ReactElement[]}
            </a>
          )}
          {!isNil(event.speakerJob) && (
            <p itemProp="jobTitle" className="mt-1 text-sm">
              {parse(event.speakerJob) as ReactElement[]}
            </p>
          )}
        </div>
      )}
      {!isNil(event.applyLink) && (
        <p className="text-sm sm:col-span-8 lg:col-span-3">
          {t('homepage.events.apply_desc')}
        </p>
      )}
      {!isNil(event.subscriptionLink) &&
        !isEmpty(event.subscriptionLink) &&
        isNil(event.applyLink) &&
        !isNil(event.date) &&
        isAfter(parseISO(event.date), new Date()) && (
          <div className="flex items-center sm:justify-end sm:col-span-4 lg:col-span-2">
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
          <div className="flex items-center sm:justify-end sm:col-span-4 lg:col-span-2">
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
          <div className="flex items-center sm:justify-end sm:col-span-4 lg:col-span-2">
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
