import { css } from '@emotion/react';
import tw from 'twin.macro';

export const linksWrapper = css`
  a {
    ${tw`underline md:hover:underline-blue-DEFAULT underline-offset-small md:hover:bg-blue md:hover:text-white md:hover:no-underline transition-colors`}
  }
`;
