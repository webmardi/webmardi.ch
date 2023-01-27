import React from 'react';
import clsx from 'clsx';
import { isNil } from 'ramda';

import Icon from 'components/Icon';
import { IconNames } from 'components/Icons/Icons';

type Props = {
  as?: React.ElementType;
  scheme?: 'outline' | 'blue' | 'cyan';
  size?: 'base' | 'lg';
  children: React.ReactNode | string;
  iconLeft?: IconNames;
  iconRight?: IconNames;
  className?: string;
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
      iconLeft,
      iconRight,
      children,
      ...props
    }: Props,
    ref
  ) => (
    <Component
      ref={ref}
      {...props}
      className={clsx(
        props?.className,
        'inline-block font-bold transition-colors whitespace-nowrap',
        size === 'lg' && 'px-4 py-2 lg:px-8 lg:py-3 lg:text-xl text-lg',
        size === 'base' && 'px-4 py-2',
        scheme === 'outline' &&
          'border border-blue md:hover:bg-blue text-blue md:hover:text-white hover:border-white focus:bg-blue-dark focus:text-white bg-white',
        scheme === 'cyan' &&
          'border border-cyan md:hover:border-blue md:hover:bg-white bg-cyan text-blue focus:text-blue-dark md:hover:text-blue-lighter',
        scheme === 'blue' &&
          'border border-blue md:hover:border-cyan md:hover:bg-cyan focus:bg-cyan bg-blue text-white focus:text-blue-dark md:hover:text-blue'
      )}
    >
      {!isNil(iconLeft) && <Icon name={iconLeft} className="mr-4 text-lg" />}
      {children}
      {!isNil(iconRight) && <Icon name={iconRight} className="ml-4 text-lg" />}
    </Component>
  )
);

Button.displayName = 'Button';

export default Button as ButtonFn;
