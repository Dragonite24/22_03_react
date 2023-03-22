import { FC } from "react";

import styles from './styles.module.scss';

type ButtonProps = {
  title: string;
  type?: 'primary' | 'outlined';
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick, type = 'primary', title }) => {

  return <button onClick={onClick} className={`${styles.Button} ${type === "outlined" ? styles.Button_outlined : ''}`}>
    <span>{title}</span>
  </button>
}