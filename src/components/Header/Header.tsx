import React from 'react';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import Icon from 'components/Icon';
import { IconNames } from 'components/Icons/Icons';

const socials: { url: string; icon: IconNames }[] = [
  {
    url: 'https://www.facebook.com/webmardi',
    icon: 'facebook',
  },
  {
    url: 'https://www.twitter.com/webmardi',
    icon: 'twitter',
  },
  {
    url: 'https://www.youtube.com/webmardi',
    icon: 'youtube',
  },
  {
    url: 'https://www.instagram.com/webmardi',
    icon: 'instagram',
  },
];

const Header = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <header tw="text-white bg-blue">
      <div tw="px-4 py-4 mx-auto border-b md:py-10 max-w-7xl border-blue-lighter">
        <div tw="items-center justify-between md:flex space-y-4 md:space-y-0">
          <img
            src="/vectors/logo.svg"
            alt={t('header.logo')}
            tw="w-1/3 md:w-auto"
            width="207"
            height="33"
          />
          <p tw="flex flex-col sm:flex-row sm:items-center">
            {t('header.follow_us')}
            <span tw="text-lg sm:pl-8 md:text-xl space-x-4 md:space-x-6">
              {socials.map(({ url, icon }) => (
                <a
                  href={url}
                  key={icon}
                  target="_blank"
                  rel="noreferrer"
                  tw="inline-block focus:text-cyan transition-colors md:hover:motion-safe:animate-bounce"
                >
                  <Icon name={icon} />
                  <span tw="sr-only">{icon}</span>
                </a>
              ))}
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
