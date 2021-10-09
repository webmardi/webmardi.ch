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
      <div tw="py-10 mx-auto border-b max-w-7xl border-blue-lighter">
        <div tw="flex items-center justify-between">
          <img src="/vectors/logo.svg" alt={t('header.logo')} />
          <p tw="flex items-center">
            {t('header.follow_us')}
            <span tw="pl-8 text-xl space-x-6">
              {socials.map(({ url, icon }) => (
                <a
                  href={url}
                  key={icon}
                  target="_blank"
                  rel="noreferrer"
                  tw="inline-block focus:text-cyan transition-colors hover:motion-safe:animate-bounce"
                >
                  <Icon name={icon} />
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
