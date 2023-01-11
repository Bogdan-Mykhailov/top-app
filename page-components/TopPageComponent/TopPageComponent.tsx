import s from "./TopPageComponent.module.css";
import React from "react";
import {ITopPageComponentProps} from "./TopPageComponent.props";
import {Advantages, HhData, HTag, Paragraph, Tag} from "../../components";
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
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && <>
        <HTag tag='h2'>Преимущества</HTag>
        <Advantages advantages={page.advantages}/>
      </>
      }
      {page.seoText && <div className={s.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} /> }
      <HTag tag='h2'>Получаемые навыки</HTag>
      {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
    </div>
  );
};
