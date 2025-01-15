import { FC } from "react";
import styles from "./title.module.css";

interface TitleProps {
  title: string;
}

export const Title: FC<TitleProps> = ({ title }) => {
  const titleStyle = `${styles.typography_title}`;

  return <h2 className={titleStyle}>{title}</h2>;
};
