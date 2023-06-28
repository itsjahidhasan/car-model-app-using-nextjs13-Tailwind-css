import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containStyles?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
