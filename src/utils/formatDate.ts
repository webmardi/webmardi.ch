import { format, FormatOptions, Locale } from 'date-fns';
import { enGB, frCH } from 'date-fns/locale';
import { type } from 'ramda';

const supportedLocale: Record<string, Locale> = {
  fr: frCH,
  en: enGB,
};

const formatDateI18n = (
  date: Date | string,
  frmt: string,
  options?: FormatOptions
): string => {
  const inputDate = type(date) === 'String' ? new Date(date) : (date as Date);

  return format(inputDate, frmt, {
    ...options,
    locale: supportedLocale.en,
  });
};

export default formatDateI18n;
