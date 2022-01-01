import { format } from 'date-fns';
import { enGB, frCH } from 'date-fns/locale';
import { type } from 'ramda';

import i18n from 'locales/i18n';

const supportedLocale: Record<string, Locale> = {
  fr: frCH,
  en: enGB,
};

const formatDateI18n = (
  date: Date | string,
  frmt: string,
  options?: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    firstWeekContainsDate?: number;
    useAdditionalWeekYearTokens?: boolean;
    useAdditionalDayOfYearTokens?: boolean;
  }
): string => {
  const inputDate = type(date) === 'String' ? new Date(date) : (date as Date);

  return format(inputDate, frmt, {
    ...options,
    locale: supportedLocale[i18n.language],
  });
};

export default formatDateI18n;
