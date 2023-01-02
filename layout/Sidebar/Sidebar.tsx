import React from 'react';
import {ISidebarProps} from "./Sidebar.props";
import {Menu} from "../Menu/Menu";
import Logo from '../logo.svg';
import s from './Sidebar.module.css';
import cn from "classnames";

export const Sidebar = ({className, ...restProps}: ISidebarProps): JSX.Element => {
  return (
    <div className={cn(className, s.sidebar)} {...restProps} >
      <Logo className={s.logo}/>
      <div>Поиск</div>
      <Menu/>
    </div>
  );
};
