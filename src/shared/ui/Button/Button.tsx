import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.css";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
}

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
  const { children, className, theme = ButtonTheme.PRIMARY, ...restProps } = props;

  return (
    <button className={cn(className, styles[theme])} {...restProps}>
      {children}
    </button>
  );
};
