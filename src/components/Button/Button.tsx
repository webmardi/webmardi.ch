import React from 'react';
import { jsx } from '@emotion/react';
import { isNil } from 'ramda';
import tw from 'twin.macro';

import Icon from 'components/Icon';
import { IconNames } from 'components/Icons/Icons';

type Props = {
  as?: React.ElementType;
  scheme?: 'outline' | 'blue' | 'cyan';
  size?: 'base' | 'lg';
  children: React.ReactNode | string;
  iconRight?: IconNames;
  // eslint-disable-next-line
  [x: string]: any;
};

type ButtonFn = (props: Props) => JSX.Element;

const Button = React.forwardRef(
  (
    {
      scheme = 'outline',
      size = 'base',
      as: Component = 'button',
      iconRight,
      children,
      ...props
    }: Props,
    ref
  ) => (
    <Component
      ref={ref}
      tw="inline-block font-bold transition-colors"
      css={[
        size === 'lg' && tw`px-4 py-2 lg:px-8 lg:py-3 lg:text-xl text-lg`,
        size === 'base' && tw`px-4 py-2`,
        scheme === 'outline' &&
          tw`border border-blue md:hover:bg-blue md:hover:text-white focus:bg-blue-dark focus:text-white bg-white`,
        scheme === 'cyan' &&
          tw`border border-cyan md:hover:border-blue md:hover:bg-white bg-cyan text-blue focus:text-blue-dark md:hover:text-blue-lighter`,
        scheme === 'blue' &&
          tw`border border-blue md:hover:border-cyan md:hover:bg-cyan focus:bg-cyan bg-blue text-white focus:text-blue-dark md:hover:text-blue`,
      ]}
      {...props}
    >
      {children}
      {!isNil(iconRight) && <Icon name={iconRight} tw="ml-4 text-lg" />}
    </Component>
  )
);

Button.displayName = 'Button';

export default Button as ButtonFn;