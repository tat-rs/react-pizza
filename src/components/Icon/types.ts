import React from 'react';
import icons from './icons';

export type IconType<T> = T;

export type IconProps = {
  type: IconType<keyof typeof icons>,
  className?: string,
  onClick?: () => void,
  children?: React.ReactNode,
}
