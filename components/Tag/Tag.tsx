import React from 'react';
import {ITag} from "./Tag.props";
import s from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({size = 'medium', color = 'ghost', className, href, children, ...restProps}: ITag): JSX.Element => {
  return <div className={cn(s.tag, className, {
    [s.ghost]: color === 'ghost',
    [s.red]: color === 'red',
    [s.gray]: color === 'gray',
    [s.green]: color === 'green',
    [s.primary]: color === 'primary',
    [s.medium]: size === 'medium',
    [s.large]: size === 'large'
  })} {...restProps}>
    {
      href
        ? <a href={href}>{children}</a>
        : <>{children}</>
    }
  </div>;
};
