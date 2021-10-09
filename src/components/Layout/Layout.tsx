import React, { FunctionComponent } from 'react';
import { jsx } from '@emotion/react';
import tw, { GlobalStyles } from 'twin.macro';

import Header from 'components/Header';
import Icons from 'components/Icons';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => (
  // eslint-disable-next-line react-hooks/rules-of-hooks
  <div tw="font-sans antialiased text-blue">
    <Icons />
    <Header />
    {children}
  </div>
);
Layout.defaultProps = {};

// For Storybook
export const LayoutDecorator = (Story: FunctionComponent): JSX.Element => (
  <>
    <GlobalStyles />
    <div tw="font-sans antialiased text-blue">
      <Story />
    </div>
  </>
);

export default Layout;
