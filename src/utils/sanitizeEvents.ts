import { ApiEvents, Event } from 'types';

const sanitizeEvents = (results: ApiEvents['results']): Event[] =>
  results.map(({ properties }) => ({
    title: properties.Name.title[0].plain_text,
    date: properties.date.date.start,
    type: properties.type.multi_select.map(i => i.name),
    speaker_name: properties.speaker_name.rich_text[0].plain_text,
    speaker_job: properties.speaker_job.rich_text[0].plain_text,
    speaker_link: properties.speaker_link.url,
    location: properties.location.rich_text[0].plain_text,
    subscription_link: properties.subscription_link.url,
  }));

export default sanitizeEvents;
