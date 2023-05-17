import cn from "classnames";
import { CarFromApi, fetchCars, getCars } from "pages/MainPage";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks";
import { CarsList } from "widgets/CarsList";
import { SortButtons } from "widgets/SortButtons";
import styles from "./MainPage.module.css";

export interface MainPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const MainPage = (props: MainPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const cars = useSelector(getCars.selectAll);
  const [sortedCars, setSortedCars] = useState<CarFromApi[]>([]);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    setSortedCars(cars);
  }, [cars]);

  return (
    <div className={cn(styles.root, className)}>
      <SortButtons setCars={setSortedCars} />
      <CarsList cars={sortedCars} />
    </div>
  );
};
