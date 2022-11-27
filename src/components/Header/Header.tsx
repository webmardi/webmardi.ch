/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

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
  {
    url: 'https://www.linkedin.com/company/webmardi',
    icon: 'linkedin',
  },
];

const Header = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <header className="text-white bg-blue">
      <div className="px-4 py-4 mx-auto border-b md:py-10 max-w-7xl border-blue-lighter">
        <div className="items-center justify-between md:flex space-y-4 md:space-y-0">
          <Link href="/">
            <img
              src="/vectors/logo.svg"
              alt={t('header.logo')}
              className="w-1/3 md:w-auto"
              width="207"
              height="33"
            />
          </Link>
          <p className="flex flex-col sm:flex-row sm:items-center">
            {t('header.follow_us')}
            <span className="text-lg sm:pl-8 md:text-xl space-x-4 md:space-x-6">
              {socials.map(({ url, icon }) => (
                <a
                  href={url}
                  key={icon}
                  target="_blank"
                  rel="noopener"
                  className="inline-block focus:text-cyan transition-colors md:hover:motion-safe:animate-bounce"
                >
                  <Icon name={icon} />
                  <span className="sr-only">{icon}</span>
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
