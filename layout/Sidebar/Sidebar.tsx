import React from 'react';
import {ISidebarProps} from "./Sidebar.props";

export const Sidebar = ({...restProps}: ISidebarProps): JSX.Element => {
  return (
    <div {...restProps}>
      Sidebar
    </div>
  );
};
