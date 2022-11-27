import React from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  title?: string;
  imageUrl?: string;
  description?: string;
};

const host = 'https://webmardi.ch';

const SEO = ({ title, imageUrl, description }: Props): JSX.Element => {
  const { asPath } = useRouter();
  const { t } = useTranslation();

  return (
    <Head>
      <link rel="canonical" href={`${host}${asPath}`} />

      <title>{title ?? t('seo.title')}</title>

      <meta property="og:title" content={title ?? t('seo.title')} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${host}${asPath}`} />

      <meta name="description" content={description ?? t('seo.description')} />
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

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-158849142-1"
      />

      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-158849142-1');
            `,
        }}
      />
    </Head>
  );
};

export default SEO;
