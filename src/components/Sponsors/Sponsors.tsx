/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';

const Sponsors = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <header className="text-white bg-blue">
      <div className="px-4 py-8 mx-auto md:py-24 max-w-7xl">
        <div className="md:w-1/2">
          <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
            {t('homepage.sponsors.title')}
          </h2>
          <p className="mt-6">{t('homepage.sponsors.content')}</p>
        </div>
        <div className="mt-6 md:mt-16 grid md:grid-cols-3 gap-6">
          <a
            href="https://liip.ch/"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center h-40 lg:h-60 bg-blue-dark transition-colors md:hover:bg-blue-light"
          >
            <img
              src="/vectors/liip.svg"
              alt="Liip AG"
              className="w-auto"
              width="147"
              height="54"
            />
          </a>
          <a
            href="https://jolicode.ch/"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center h-40 lg:h-60 bg-blue-dark transition-colors md:hover:bg-blue-light"
          >
            <img
              src="/vectors/jolicode.svg"
              alt="Jolicode"
              className="w-auto"
              width="248"
              height="58"
            />
          </a>
          <div className="flex items-center justify-center h-40 lg:h-60 bg-blue-light">
            <div className="text-center lg:mx-20">
              <p>{t('homepage.sponsors.support_us')}</p>
              <Button
                as="a"
                target="_blank"
                rel="noopener"
                href={t('homepage.sponsors.contact_us_link')}
                itemProp="url"
                scheme="blue"
                className="mt-5 text-sm"
              >
                {t('homepage.sponsors.contact_us')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Sponsors;
