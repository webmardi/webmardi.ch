import { css } from '@emotion/react';
import tw from 'twin.macro';

export default css`
  .carousel {
    ${tw`space-x-6 overflow-x-scroll whitespace-nowrap`}
    width: calc((100vw - 100%) / 2 + 100%);
    cursor: grab;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    &:active {
      cursor: grabbing;
    }

    @media (max-width: 768px) {
      ${tw`w-full`}
      scroll-snap-type: x mandatory;
    }

    & > * {
      ${tw`inline-block`}
      scroll-snap-align: start;

      @media (max-width: 768px) {
        ${tw`w-full`}
      }
    }
  }
`;
