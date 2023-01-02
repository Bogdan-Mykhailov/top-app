import React, { useContext } from 'react';
import { AppContext } from "../../context/app.context";
import { IFirstLevelMenu, IPageItem } from "../../interfaces/menu.interface";
import { TopLevelCategory } from "../../interfaces/page.interface";
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import s from './Menu.module.css'
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const firstLevelMenu: IFirstLevelMenu[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
  {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
  {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
  {route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];

export const Menu = (): JSX.Element => {
  const {menu, firstCategory, setMenu} = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }))
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
