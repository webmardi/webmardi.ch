import React, { FunctionComponent, SVGAttributes } from 'react';

import Design from 'assets/icons/design.svg';
import Facebook from 'assets/icons/facebook.svg';
import Instagram from 'assets/icons/instagram.svg';
import Special from 'assets/icons/special.svg';
import Technical from 'assets/icons/technical.svg';
import Twitter from 'assets/icons/twitter.svg';
import Youtube from 'assets/icons/youtube.svg';

export const iconList: Record<string, unknown> = {
  youtube: Youtube,
  twitter: Twitter,
  technical: Technical,
  special: Special,
  instagram: Instagram,
  facebook: Facebook,
  design: Design,
};

export type IconNames =
  | 'youtube'
  | 'twitter'
  | 'technical'
  | 'special'
  | 'instagram'
  | 'facebook'
  | 'design';

const Icons = (): JSX.Element => (
  <div style={{ display: 'none' }}>
    {Object.keys(iconList).map(icon =>
      React.createElement<SVGAttributes<SVGAElement>>(
        iconList[icon] as FunctionComponent,
        {
          key: icon,
          id: icon.replace(/_/gm, '-'),
        }
      )
    )}
  </div>
);

export default Icons;

export const IconsDecorator = (Story: FunctionComponent): JSX.Element => (
  <>
    <Story />
    <Icons />
  </>
);
