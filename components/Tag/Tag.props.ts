import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  size?: 'medium' | 'large';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
  href?: string
}
