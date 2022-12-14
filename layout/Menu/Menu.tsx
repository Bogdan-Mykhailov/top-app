import React, { useContext } from 'react';
import { AppContext } from "../../context/app.context";
import { IFirstLevelMenu, IPageItem } from "../../interfaces/menu.interface";
import s from './Menu.module.css';
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

export const Menu = (): JSX.Element => {
  const {menu, firstCategory, setMenu} = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <a>
                <div className={cn(s.firstLevel, {
                  [s.firstLevelActive]: m.id === firstCategory
                })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (menuItem: IFirstLevelMenu) => {
    return (
      <div className={s.secondBlock}>
        {menu.map(m => {
           if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
             m.isOpened = true;
           }
          return (
            <div key={m._id.secondCategory}>
              <div className={s.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
              <div className={cn(s.secondLevelBlock, {
                [s.secondLevelBlockOpened]: m.isOpened
              })}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const buildThirdLevel = (pages: IPageItem[], route: string) => {
    return (
      pages.map(p => (
        <Link href={`/${route}/${p.alias}`}>
          <a className={cn(s.thirdLevel, {
            [s.thirdLevelActive]: `${route}/${p.alias}` === router.asPath
          })}>
            {p.category}
          </a>
        </Link>
      ))
    );
  };

  return (
    <div className={s.menu}>
      {buildFirstLevel()}
    </div>
  );
};
