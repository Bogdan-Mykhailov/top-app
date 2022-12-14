import React from "react";
import { WithLayout } from "../layout/WithLayout";
import { GetStaticProps } from "next";
import axios from "axios";
import { IMenuItem } from "../interfaces/menu.interface";

function Search(): JSX.Element {

  return (
    <>
      search
    </>
  );
}

export default WithLayout(Search);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number
}
