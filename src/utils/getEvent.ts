/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

import { ApiEvents, Event } from 'types';
import sanitizeEvents from 'utils/sanitizeEvents';

const getEvent = async (slug: string): Promise<Event | null> => {
  let event: Event | null = null;

  try {
    const { results } = await axios
      .request({
        method: 'POST',
        url: `https://api.notion.com/v1/databases/${process.env.NEXT_PUBLIC_DATABASE_ID}/query`,
        headers: {
          'Notion-Version': '2021-08-16',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
        data: {
          page_size: 1,
          filter: {
            property: 'slug',
            rich_text: {
              equals: slug,
            },
          },
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

    if (results.length > 0) [event] = results;
  } catch (error) {
    console.log('error', error);
  }

  return event;
};

export default getEvent;
