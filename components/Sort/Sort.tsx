import React from 'react';
import {ISortProps, SortEnum} from "./Sort.props";
import SortIcon from "./sort.svg";
import s from './Sort.module.css';
import cn from 'classnames';

export const Sort = ({
                       sort,
                       SetSort,
                       className,
                       ...restProps
                     }: ISortProps): JSX.Element => {
  return (
    <div className={cn(s.sort, className)} {...restProps}>
      <span
        onClick={() => SetSort(SortEnum.Rating)}
        className={cn({
        [s.active]: sort === SortEnum.Rating
        })}
      >
        <SortIcon className={s.sortIcon} /> По рейтингу
      </span>
      <span
        onClick={() => SetSort(SortEnum.Price)}
        className={cn({
        [s.active]: sort === SortEnum.Price
        })}
      >
        <SortIcon className={s.sortIcon} /> По&nbsp;цене
      </span>
    </div>
  );
};
