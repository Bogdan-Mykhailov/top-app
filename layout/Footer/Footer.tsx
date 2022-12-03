import React from 'react';
import {IFooterProps} from "./Footer.props";
import cn from "classnames";
import s from './Footer.module.css';
import {format} from 'date-fns';

export const Footer = ({className, ...restProps}: IFooterProps): JSX.Element => {
  return (
    <footer className={cn(className, s.footer)} {...restProps}>
      <div>
        OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      <a href="#" target='_blank'>Пользовательское соглашение</a>
      <a href="#" target='_blank'>Политика конфиденциальности</a>
    </footer>
  );
};
