import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Card.module.css";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={cn(styles.root, className)} {...otherProps}>
      {children}
    </div>
  );
};
