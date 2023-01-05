import React from 'react';
import {ICardProps} from "./Card.props";
import s from './Card.module.css';
import cn from 'classnames';

export const Card = ({
                       children,
                       color = 'white',
                       className,
                       ...restProps
                     }: ICardProps): JSX.Element => {
  return (
    <div className={cn(s.card, className, {
      [s.blue]: color === 'blue'
    })}
         {...restProps}
    >
      {children}
    </div>
  );
};
