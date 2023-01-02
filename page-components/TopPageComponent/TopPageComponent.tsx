import cn from "classnames";
import s from "./TopPageComponent.module.css";
import React from "react";
import { ITopPageComponentProps } from "./TopPageComponent.props";

export const TopPageComponent = ({
                                   page,
                                   products,
                                   firstCategory,
                                   className,
                                   ...restProps
                                 }: ITopPageComponentProps): JSX.Element => {
  return (
    <>
      {products && products.length}
    </>
  );
};
