import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { range } from 'ramda';

const width = 415;

const Carousel = (): JSX.Element => (
  <ScrollContainer className="carousel" vertical={false}>
    {range(1, 7).map(i => (
      <picture
        key={`carousel-item-${i}`}
        id={`carousel-item-${i}`}
        style={{ width, height: width }}
      >
        <source srcSet={`/images/webp/Webmardi-${i}.webp`} type="image/webp" />
        <source srcSet={`/images/jpeg/Webmardi-${i}.jpeg`} type="image/jpeg" />
        <img
          src={`/images/jpeg/Webmardi-${i}.jpeg`}
          alt="Alt Text!"
          loading="lazy"
          className="w-full"
          width={width}
          height={width}
        />
      </picture>
    ))}
  </ScrollContainer>
);

export default Carousel;
