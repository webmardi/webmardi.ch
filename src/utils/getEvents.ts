/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

import { ApiEvents, Event } from '@/types';
import sanitizeEvents from '@/utils/sanitizeEvents';

const getEvents = async (cursor?: string): Promise<Event[]> => {
  const events: Event[] = [];

  try {
    const { results, next_cursor, has_more } = await axios
      .request({
        method: 'POST',
        url: `https://api.notion.com/v1/databases/${import.meta.env.NEXT_PUBLIC_DATABASE_ID}/query`,
        headers: {
          'Notion-Version': '2021-08-16',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.NEXT_PUBLIC_TOKEN}`,
        },
        data: {
          page_size: 100,
          start_cursor: cursor,
          sorts: [{ property: 'date', direction: 'descending' }],
          filter: { property: 'published', checkbox: { equals: true } },
        },
      })
      .then(res => {
        const data = res.data as unknown as ApiEvents;
        return {
          results: sanitizeEvents(data.results),
          next_cursor: data.next_cursor,
          has_more: data.has_more,
        };
      });

    events.push(...results);

    if (has_more) {
      const newResults = await getEvents(next_cursor);
      events.push(...newResults);
    }
  } catch (error) {
    console.log('error', error);
  }

  return events;
};

export default getEvents;
