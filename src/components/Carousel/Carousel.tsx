import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { jsx } from '@emotion/react';
import { range } from 'ramda';
import tw from 'twin.macro';

import styles from './Carousel.styles';

const width = 415;

const Carousel = (): JSX.Element => (
  <div css={styles}>
    <ScrollContainer className="carousel" vertical={false}>
      {range(1, 7).map(i => (
        <picture
          key={`carousel-item-${i}`}
          id={`carousel-item-${i}`}
          css={{ width, height: width }}
        >
          <source
            srcSet={`/images/webp/Webmardi-${i}.webp`}
            type="image/webp"
          />
          <source
            srcSet={`/images/jpeg/Webmardi-${i}.jpeg`}
            type="image/jpeg"
          />
          <img
            src={`/images/jpeg/Webmardi-${i}.jpeg`}
            alt="Alt Text!"
            loading="lazy"
            tw="w-full"
            width={width}
            height={width}
          />
        </picture>
      ))}
    </ScrollContainer>
  </div>
);

export default Carousel;
