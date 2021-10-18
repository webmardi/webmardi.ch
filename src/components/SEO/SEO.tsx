import React from 'react';
import { useTranslation } from 'react-i18next';
import { jsx } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  title?: string;
  imageUrl?: string;
  description?: string;
};

// const host = 'https://webmardi.ch';
const host = 'http://localhost';

const SEO = ({ title, imageUrl, description }: Props): JSX.Element => {
  const { asPath } = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <link rel="canonical" href={`${host}${asPath}`} />

        <title>{title ?? t('seo.title')}</title>

        <meta property="og:title" content={title ?? t('seo.title')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${host}${asPath}`} />

        <meta
          name="description"
          content={description ?? t('seo.description')}
        />
        <meta
          property="og:description"
          content={description ?? t('seo.description')}
        />

        <meta
          property="og:image"
          content={imageUrl ?? `${host}/images/jpeg/og-image.jpg`}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2525a5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2525a5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export default SEO;
