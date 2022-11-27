import React from 'react';
import {IButtonProps} from "./Button.props";
import s from './Button.module.css';
import cn from 'classnames';

export const Button = ({children, appearance, className, ...restProps}: IButtonProps): JSX.Element => {
  return (
    <button className={cn(s.button, className, {
      [s.primary]: appearance == 'primary',
      [s.ghost]: appearance == 'ghost'
    })} {...restProps}>
      {children}
    </button>
  );
};
