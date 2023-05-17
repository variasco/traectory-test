import { CarFromApi } from "pages/MainPage";
import styles from "./CarsList.module.css";
import { ListItem } from "../ListItem/ListItem";

export interface CarsListProps {
  cars: CarFromApi[];
}

export const CarsList = (props: CarsListProps) => {
  const { cars } = props;

  return (
    <div className={styles.root}>
      {cars.map((car: CarFromApi) => (
        <ListItem className={styles.item} key={car.id} data={car} />
      ))}
    </div>
  );
};
