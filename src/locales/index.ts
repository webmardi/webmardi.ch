import { path } from 'ramda';

import strings from '@/locales/en.json';

export const t = (key: string): string => path(key.split('.'), strings) ?? key;
