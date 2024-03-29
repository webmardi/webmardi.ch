import { isNil } from 'ramda';

import { Event } from '@/types';

const getLangName = (key: Event['language']): string | null | undefined =>
  !isNil(key)
    ? new Intl.DisplayNames(['en'], { type: 'language' }).of(key)
    : null;

export default getLangName;
