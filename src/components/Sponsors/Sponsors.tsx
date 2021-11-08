import React from 'react';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

import Button from 'components/Button';

const Sponsors = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <header tw="text-white bg-blue">
      <div tw="px-4 py-8 mx-auto md:py-24 max-w-7xl">
        <div tw="md:w-1/2">
          <h2 tw="text-lg font-bold md:text-xl lg:text-2xl">
            {t('homepage.sponsors.title')}
          </h2>
          <p tw="mt-6">{t('homepage.sponsors.content')}</p>
        </div>
        <div tw="mt-6 md:mt-16 grid md:grid-cols-3 gap-6">
          {/* <a
            href="https://antistatique.net/"
            target="_blank"
            rel="noreferrer"
            tw="flex items-center justify-center h-40 lg:h-60 bg-blue-dark transition-colors md:hover:bg-blue-light"
          >
            <img
              src="/vectors/antistatique.svg"
              alt="Antistatique SA"
              tw="w-auto"
              width="235"
              height="42"
            />
          </a> */}
          <a
            href="https://liip.ch/"
            target="_blank"
            tw="flex items-center justify-center h-40 lg:h-60 bg-blue-dark transition-colors md:hover:bg-blue-light"
          >
            <img
              src="/vectors/liip.svg"
              alt="Liip AG"
              tw="w-auto"
              width="147"
              height="54"
            />
          </a>
          <a
            href="https://jolicode.ch/"
            target="_blank"
            tw="flex items-center justify-center h-40 lg:h-60 bg-blue-dark transition-colors md:hover:bg-blue-light"
          >
            <img
              src="/vectors/jolicode.svg"
              alt="Jolicode"
              tw="w-auto"
              width="248"
              height="58"
            />
          </a>
          <div tw="flex items-center justify-center h-40 lg:h-60 bg-blue-light">
            <div tw="text-center lg:mx-20">
              <p>{t('homepage.sponsors.support_us')}</p>
              <Button
                as="a"
                target="_blank"
                rel="noreferrer"
                href={t('homepage.sponsors.contact_us_link')}
                itemProp="url"
                scheme="blue"
                tw="mt-5 text-sm"
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
