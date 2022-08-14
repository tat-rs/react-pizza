import React from 'react';
import icons from './icons';
import { IconProps } from './types';

function Icon({
  type, className, onClick, children,
}: IconProps) {
  if (onClick) {
    return (
      <button className={className} type="button" onClick={onClick}>
        {icons[type]}
        {children}
      </button>
    );
  }
  return (
    <span className={className}>
      {icons[type]}
    </span>
  );
}

export default Icon;
