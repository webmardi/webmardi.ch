import { format } from 'date-fns';
import i18next from 'i18next';

import formatDate from '../formatDate';

describe('formatDate', () => {
  it('should return same output as date-fns', () => {
    const date = new Date();
    expect(formatDate(date, 'yyyy-MM-dd')).toBe(format(date, 'yyyy-MM-dd'));
  });

  it('should the correct language related format', () => {
    const date = new Date('December 17, 1995 03:24:00');

    i18next.changeLanguage('fr');
    expect(formatDate(date, 'P')).toBe('17.12.1995');

    i18next.changeLanguage('en');
    expect(formatDate(date, 'P')).toBe('17/12/1995');
  });
});
