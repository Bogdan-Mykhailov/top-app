import React from 'react';
import {IHeaderProps} from "./Header.props";

export const Header = ({...restProps}: IHeaderProps): JSX.Element => {
  return (
    <header {...restProps}>
      Header
    </header>
  );
};
