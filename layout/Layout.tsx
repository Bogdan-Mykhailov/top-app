import React from 'react';
import {ILayoutProps} from "./Layout.props";
import s from './Layout.module.css';
import {Sidebar} from "./Sidebar/Sidebar";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

export const Layout = ({children}: ILayoutProps): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header}/>
      <Sidebar className={s.sidebar}/>
      <div className={s.body}>
        {children}
      </div>
      <Footer className={s.footer}/>
    </div>
  );
};
