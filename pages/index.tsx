import React, {useState} from "react";
import {Button, HTag, Paragraph, Rating, Tag} from "../components";
import {Layout} from "../layout/Layout";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
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
    </Layout>
  );
}
