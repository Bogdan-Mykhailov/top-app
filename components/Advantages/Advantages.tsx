import React from 'react';
import {IAdvantagesProps} from "./Advantages.props";
import s from './Advantages.module.css';
import CheckIcon from './check.svg';

export const Advantages = ({advantages}: IAdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map(a => (
        <div key={a._id} className={s.advantage}>
          <CheckIcon/>
          <div className={s.title}>{a.title}</div>
          <hr className={s.verticalLine}/>
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
