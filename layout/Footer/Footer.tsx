import React from 'react';
import {IFooterProps} from "./Footer.props";

export const Footer = ({...restProps}: IFooterProps): JSX.Element => {
  return (
    <div {...restProps}>
      Footer
    </div>
  );
};
