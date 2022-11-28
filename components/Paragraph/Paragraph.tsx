import React from 'react';
import {IParagraph} from "./Paragraph.props";
import s from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
                            children,
                            size = 'medium',
                            className,
                            ...restProps
                          }: IParagraph): JSX.Element => {
  return (
    <p className={cn(s.paragraph, className, {
      [s.large]: size == 'large',
      [s.medium]: size == 'medium',
      [s.small]: size == 'small'
    })}
       {...restProps}
    >
      {children}
    </p>
  );
};
