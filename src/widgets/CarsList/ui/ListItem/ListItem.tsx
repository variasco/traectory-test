import cn from "classnames";
import { CarFromApi, carsActions } from "pages/MainPage";
import { DetailedHTMLProps, HTMLAttributes, useCallback, useMemo, useState } from "react";
import { ReactComponent as CloseIcon } from "shared/assets/icons/close-icon.svg";
import { useAppDispatch } from "shared/hooks";
import { Button, ButtonTheme, Card, Input } from "shared/ui";
import styles from "./ListItem.module.css";

export interface ListItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: CarFromApi;
}

export const ListItem = (props: ListItemProps) => {
  const { className, data } = props;
  const { name, model, color, year, price, latitude, longitude, id } = data;
  const [editable, setEditable] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const initialState: CarFromApi = useMemo(
    () => ({
      name,
      model,
      color,
      year,
      price,
      latitude,
      longitude,
      id,
    }),
    [name, model, color, year, price, latitude, longitude, id]
  );

  const [form, setForm] = useState(initialState);

  const onEdit = useCallback(() => {
    setEditable(true);
  }, []);

  const onSave = useCallback(() => {
    setEditable(false);
    dispatch(carsActions.editCar({ id, changes: form }));
  }, [dispatch, form, id]);

  const onDelete = () => {
    dispatch(carsActions.deleteCar(id));
  };

  return (
    <Card className={cn(styles.root, className)}>
      <Button className={styles.removeBtn} theme={ButtonTheme.CLEAR} onClick={onDelete}>
        <CloseIcon width={10} height={10} />
      </Button>
      <Input
        disabled={!editable}
        className={styles.name}
        label="Name"
        value={form.name}
        onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
      />
      <Input
        disabled={!editable}
        className={styles.model}
        label="Model"
        value={form.model}
        onChange={(value) => setForm((prev) => ({ ...prev, model: value }))}
      />
      <Input
        disabled={!editable}
        className={styles.color}
        label="Color"
        value={form.color}
        onChange={(value) => setForm((prev) => ({ ...prev, color: value }))}
      />
      <Input
        disabled={!editable}
        className={styles.year}
        label="Year"
        value={form.year}
        onChange={(value) => setForm((prev) => ({ ...prev, year: parseInt(value) }))}
      />
      <Input
        disabled={!editable}
        className={styles.price}
        label="Price"
        value={form.price}
        onChange={(value) => setForm((prev) => ({ ...prev, price: parseInt(value) }))}
      />
      <Input disabled label="latitude" value={latitude} />
      <Input disabled label="longitude" value={longitude} />
      {editable ? (
        <Button onClick={onSave}>Сохранить</Button>
      ) : (
        <Button onClick={onEdit}>Редактировать</Button>
      )}
    </Card>
  );
};
