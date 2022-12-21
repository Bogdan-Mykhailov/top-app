import React from 'react';
import {ISidebarProps} from "./Sidebar.props";
import {Menu} from "../Menu/Menu";

export const Sidebar = ({...restProps}: ISidebarProps): JSX.Element => {
  return (
    <div {...restProps}>
      <Menu/>
    </div>
  );
};
