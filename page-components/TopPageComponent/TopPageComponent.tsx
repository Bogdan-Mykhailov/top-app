import s from "./TopPageComponent.module.css";
import React from "react";
import {ITopPageComponentProps} from "./TopPageComponent.props";
import {HhData, HTag, Tag} from "../../components";
import {TopLevelCategory} from "../../interfaces/page.interface";

export const TopPageComponent = ({
                                   page,
                                   products,
                                   firstCategory
                                 }: ITopPageComponentProps): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <HTag tag='h1'>{page.title}</HTag>
        {products && <Tag color='gray' size='medium'>{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>
      <div className={s.hhTitle}>
        <HTag tag='h2'>Вакансии - {page.category}</HTag>
        <Tag color='red' size='medium'>hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  );
};
