import { isNil } from 'ramda';

import { ApiEvents, Event, Properties } from 'types';

const getRichContent = (
  content:
    | Properties['speaker_name' | 'speaker_job' | 'location']['rich_text']
    | undefined
): string | null => {
  if (isNil(content)) return null;

  return content.reduce(
    (a: string, v) =>
      `${a}${
        !isNil(v?.href)
          ? `<a href="${v.href}">${v?.plain_text}</a>`
          : v?.plain_text
      }`,
    ''
  );
};

const sanitizeEvents = (results: ApiEvents['results']): Event[] =>
  results.map(({ properties }) => ({
    title: properties.Name.title[0]?.plain_text ?? null,
    date: (properties.date.date.start as unknown as string) ?? null,
    types: properties.types.multi_select.map(i => i.name) ?? null,
    language: properties.language.select?.name ?? null,
    speakerName: getRichContent(properties.speaker_name.rich_text),
    speakerJob: getRichContent(properties.speaker_job.rich_text),
    seoBody: getRichContent(properties.seo_body.rich_text) ?? '',
    seoHashtags: getRichContent(properties.seo_hashtags.rich_text) ?? '',
    speakerLink: properties.speaker_link.url ?? null,
    location: getRichContent(properties.location.rich_text),
    subscriptionLink: properties.subscription_link.url ?? null,
    applyLink: properties.apply_link.url ?? null,
    youtubeLink: properties.youtube_link.url ?? null,
  }));

export default sanitizeEvents;
