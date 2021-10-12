import { ApiEvents, Event } from 'types';

const sanitizeEvents = (results: ApiEvents['results']): Event[] =>
  results.map(({ properties }) => ({
    title: properties.Name.title[0].plain_text,
    date: properties.date.date.start as unknown as string,
    types: properties.types.multi_select.map(i => i.name),
    speakerName: properties.speaker_name.rich_text[0].plain_text,
    speakerJob: properties.speaker_job.rich_text[0].plain_text,
    speakerLink: properties.speaker_link.url,
    location: properties.location.rich_text[0].plain_text,
    subscriptionLink: properties.subscription_link.url,
  }));

export default sanitizeEvents;
