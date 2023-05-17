import cn from "classnames";
import { DetailedHTMLProps, InputHTMLAttributes, memo } from "react";
import styles from "./Input.module.css";

type HTMLInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "value" | "onChange"
>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  error?: string;
  label?: string;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, error, label, disabled, ...restProps } = props;

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
  }

  return (
    <div className={styles.root}>
      {label && (
        <label className={cn(styles.label, { [styles.errorColor]: error })}>
          {`${label}`}
          <input
            className={cn(styles.input, className, {
              [styles.errorColor]: error,
              [styles.disabled]: disabled,
            })}
            value={value}
            onChange={onChangeHandler}
            disabled={disabled}
            {...restProps}
          />
        </label>
      )}
      {error && <p className={cn(styles.error, styles.errorColor)}>{error}</p>}
    </div>
  );
});
