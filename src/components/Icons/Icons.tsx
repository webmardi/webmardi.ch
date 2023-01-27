import React, { FunctionComponent, SVGAttributes } from 'react';

import Design from 'assets/icons/design.svg';
import Facebook from 'assets/icons/facebook.svg';
import ForEveryone from 'assets/icons/for_everyone.svg';
import Instagram from 'assets/icons/instagram.svg';
import Linkedin from 'assets/icons/linkedin.svg';
import Mastodon from 'assets/icons/mastodon.svg';
import SpecialEvent from 'assets/icons/special_event.svg';
import Technical from 'assets/icons/technical.svg';
import Twitter from 'assets/icons/twitter.svg';
import Youtube from 'assets/icons/youtube.svg';

export const iconList: Record<string, unknown> = {
  youtube: Youtube,
  twitter: Twitter,
  technical: Technical,
  special_event: SpecialEvent,
  for_everyone: ForEveryone,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  design: Design,
  mastodon: Mastodon,
};

export type IconNames =
  | 'youtube'
  | 'twitter'
  | 'technical'
  | 'special_event'
  | 'for_everyone'
  | 'instagram'
  | 'facebook'
  | 'linkedin'
  | 'design'
  | 'mastodon';

const Icons = (): JSX.Element => (
  <div style={{ display: 'none' }}>
    {Object.keys(iconList).map(icon =>
      React.createElement<SVGAttributes<SVGAElement>>(
        iconList[icon] as FunctionComponent,
        {
          key: icon,
          id: icon,
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
