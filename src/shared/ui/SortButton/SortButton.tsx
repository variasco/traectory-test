import cn from "classnames";
import { memo, ReactNode, SyntheticEvent } from "react";
import styles from "./SortButton.module.css";
import { ReactComponent as UpIcon } from "shared/assets/icons/up-arrow.svg";
import { ReactComponent as DownIcon } from "shared/assets/icons/down-arrow.svg";

export interface SortButtonProps {
  className?: string;
  children: ReactNode;
  selected?: boolean;
  activeUp?: boolean;
  activeDown?: boolean;
  onClickUp?: () => void;
  onClickDown?: () => void;
}

export const SortButton = memo((props: SortButtonProps) => {
  const { className, children, onClickUp, onClickDown, activeUp, activeDown } = props;

  const upClickHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
    onClickUp?.();
  };

  const downClickHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
    onClickDown?.();
  };

  return (
    <button
      className={cn(styles.root, className, { [styles.buttonActive]: activeUp || activeDown })}
      onClick={onClickUp}
    >
      {children}
      <div className={styles.icons}>
        <UpIcon
          className={cn(styles.icon, { [styles.iconActive]: activeUp })}
          onClick={upClickHandler}
        />
        <DownIcon
          className={cn(styles.icon, { [styles.iconActive]: activeDown })}
          onClick={downClickHandler}
        />
      </div>
    </button>
  );
});
