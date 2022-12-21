import React, {useContext} from 'react';
import cn from "classnames";
import s from './Menu.module.css';
import {format} from 'date-fns';
import {AppContext} from "../../context/app.context";

export const Menu = (): JSX.Element => {
  const {menu, firstCategory, setMenu} = useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </div>
  );
};
