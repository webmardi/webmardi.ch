import { ApiEvents, Event } from 'types';

const sanitizeEvents = (results: ApiEvents['results']): Event[] =>
  results.map(({ properties }) => ({
    title: properties.Name.title[0]?.plain_text ?? null,
    date: (properties.date.date.start as unknown as string) ?? null,
    types: properties.types.multi_select.map(i => i.name) ?? null,
    speakerName: properties.speaker_name.rich_text[0]?.plain_text ?? null,
    speakerJob: properties.speaker_job.rich_text[0]?.plain_text ?? null,
    speakerLink: properties.speaker_link.url ?? null,
    location: properties.location.rich_text[0]?.plain_text ?? null,
    subscriptionLink: properties.subscription_link.url ?? null,
    applyLink: properties.apply_link.url ?? null,
    youtubeLink: properties.youtube_link.url ?? null,
  }));

export default sanitizeEvents;
