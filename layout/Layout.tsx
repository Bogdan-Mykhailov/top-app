import React, {FunctionComponent} from 'react';
import {ILayoutProps} from "./Layout.props";
import s from './Layout.module.css';
import cn from 'classnames';
import {Sidebar} from "./Sidebar/Sidebar";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";

export const Layout = ({children}: ILayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
};