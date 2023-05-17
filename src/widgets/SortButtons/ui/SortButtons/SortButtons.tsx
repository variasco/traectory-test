import cn from "classnames";
import { CarFromApi } from "pages/MainPage";
import { useCallback, useEffect, useState } from "react";
import { SortButton } from "shared/ui";
import styles from "./SortButtons.module.css";

export interface SortButtonsProps {
  className?: string;
  setCars: React.Dispatch<React.SetStateAction<CarFromApi[]>>;
}

type SortBy = "yearDesc" | "yearAsc" | "priceDesc" | "priceAsc";

export const SortButtons = (props: SortButtonsProps) => {
  const { className, setCars } = props;
  const [selectedSort, setSelectedSort] = useState<SortBy>("yearDesc");

  const onYearDesc = useCallback(() => {
    setCars((prev) => [...prev].sort((a, b) => b.year - a.year));
    setSelectedSort("yearDesc");
  }, []);

  const onYearAsc = useCallback(() => {
    setCars((prev) => [...prev].sort((a, b) => a.year - b.year));
    setSelectedSort("yearAsc");
  }, []);

  const onPriceDesc = useCallback(() => {
    setCars((prev) => [...prev].sort((a, b) => b.price - a.price));
    setSelectedSort("priceDesc");
  }, []);

  const onPriceAsc = useCallback(() => {
    setCars((prev) => [...prev].sort((a, b) => a.price - b.price));
    setSelectedSort("priceAsc");
  }, []);

  useEffect(() => {
    onYearDesc();
  }, [onYearDesc]);

  return (
    <div className={cn(styles.root, className)}>
      <SortButton
        onClickUp={onYearDesc}
        onClickDown={onYearAsc}
        activeUp={selectedSort === "yearDesc"}
        activeDown={selectedSort === "yearAsc"}
      >
        Год выпуска
      </SortButton>
      <SortButton
        onClickUp={onPriceDesc}
        onClickDown={onPriceAsc}
        activeUp={selectedSort === "priceDesc"}
        activeDown={selectedSort === "priceAsc"}
      >
        Цена
      </SortButton>
    </div>
  );
};
