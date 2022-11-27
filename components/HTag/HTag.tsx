import React from 'react';
import {IHTagProps} from "./HTag.props";
import s from './HTag.module.css';

export const HTag = ({tag, children}: IHTagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={s.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={s.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={s.h3}>{children}</h3>;
    default:
      return <></>;
  }
};
