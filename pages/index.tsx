import React, {useState} from "react";
import {Button, HTag, Paragraph, Rating, Tag} from "../components";
import {WithLayout} from "../layout/WithLayout";
import {GetStaticProps} from "next";
import axios from "axios";
import {IMenuItem} from "../interfaces/menu.interface";

function Home({ menu }: IHomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <HTag tag='h1'>Текст</HTag>
      <Button arrow='down' appearance='primary'>Text</Button>
      <Button arrow='right' appearance='ghost'>Text</Button>
      <Paragraph>Напишу сразу в двух курсах</Paragraph>
      <Tag color='green'>Text</Tag>
      <Tag color='primary' size='large'>Text</Tag>
      <Tag color='red'>Text</Tag>
      <Tag size='large'>Text</Tag>
      <Tag color='gray'>Text</Tag>
      <Rating rating={rating} setRating={setRating} isEditable/>
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}

      </ul>
    </>
  );
}

export default WithLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface IHomeProps extends Record<string, unknown>{
  menu: IMenuItem[];
  firstCategory: number
}
