import React from 'react';
import {IButtonProps} from "./Button.props";
import s from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({
                         children,
                         arrow = 'none',
                         appearance,
                         className,
                         ...restProps
                       }: IButtonProps): JSX.Element => {
  return (
    <button className={cn(s.button, className, {
      [s.primary]: appearance == 'primary',
      [s.ghost]: appearance == 'ghost'
    })} {...restProps}>
      {children}
      {arrow !== 'none' && <span className={cn(s.arrow, {
        [s.down]: arrow == 'down',
      })}><ArrowIcon/></span>}
    </button>
  );
};
