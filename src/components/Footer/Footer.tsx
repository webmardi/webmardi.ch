/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* buggy ESlint, sorry... */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { jsx } from '@emotion/react';
import Interweave from 'interweave';
import tw from 'twin.macro';

import Button from 'components/Button';
import { linksWrapper } from 'styles';
import { formatDate } from 'utils';

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  return (
    <footer tw="px-4 mx-auto py-9 md:pt-24 max-w-7xl">
      <div tw="lg:grid grid-cols-12 gap-6">
        <div tw="col-span-6">
          <h2 tw="text-lg font-bold md:text-xl lg:text-2xl">
            {t('footer.newsletter.title')}
          </h2>
          <p tw="mt-4 md:mt-7">{t('footer.newsletter.info')}</p>

          <MailchimpSubscribe
            url="https://webmardi.us3.list-manage.com/subscribe/post?u=7d8f67d1605a1d4858b9a8c32&amp;id=27d71f62b4"
            render={({ subscribe, status, message }) => (
              <>
                {status !== 'success' && (
                  <form
                    tw="w-full mt-6 sm:flex lg:mt-16 space-y-4 sm:space-y-0"
                    onSubmit={e => {
                      e.preventDefault();
                      subscribe({ EMAIL: email });
                    }}
                  >
                    <label htmlFor="email-address" tw="sr-only">
                      {t('footer.newsletter.email')}
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      tw="w-full px-4 py-2 mr-5 text-sm md:text-base placeholder-blue border-blue focus:ring-blue-dark focus:border-blue-dark"
                      placeholder={t('footer.newsletter.email')}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <div tw="flex-shrink-0">
                      <Button type="submit" scheme="blue">
                        {t('footer.newsletter.subscribe')}
                      </Button>
                    </div>
                  </form>
                )}
                {status === 'error' && <p tw="mt-4 text-sm">{message}</p>}
                {status === 'success' && (
                  <p tw="mt-8">{t('footer.newsletter.success')}</p>
                )}
              </>
            )}
          />
        </div>

        <div tw="flex flex-col mt-12 col-span-5 col-start-8 lg:mt-0">
          <h2 tw="text-lg font-bold md:text-xl lg:text-2xl">
            {t('footer.speaker.title')}
          </h2>
          <p tw="mt-4 md:mt-7">{t('footer.speaker.info')}</p>
          <div tw="mt-6 lg:mt-auto space-y-4 sm:space-y-0">
            <Button
              as="a"
              href={t('footer.speaker.contact_us_link')}
              target="_blank"
              rel="noreferrer"
              scheme="outline"
              tw="mr-5 xl:px-10"
            >
              {t('footer.speaker.contact_us')}
            </Button>
            <Button
              as="a"
              href={t('footer.speaker.submit_paper_link')}
              target="_blank"
              rel="noreferrer"
              scheme="cyan"
            >
              {t('footer.speaker.submit_paper')}
            </Button>
          </div>
        </div>
      </div>

      <address tw="items-center justify-between mt-12 text-sm not-italic md:flex md:mt-32">
        <Interweave
          content={t('footer.made_by')}
          css={linksWrapper}
          allowAttributes
        />
        <p>hosted by Infomaniak</p>
        <p>Webmardi © {formatDate(new Date(), 'yyyy')}</p>
      </address>
    </footer>
  );
};

export default Footer;