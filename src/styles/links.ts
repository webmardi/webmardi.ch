import { css } from '@emotion/react';
import tw from 'twin.macro';

export const linksWrapper = css`
  a {
    ${tw`underline hover:underline-blue-DEFAULT underline-offset-small hover:bg-blue hover:text-white hover:no-underline transition-colors`}
  }
`;
