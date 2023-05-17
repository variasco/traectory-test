import { AxiosInstance } from "axios";
import { CarsSchema } from "pages/MainPage";

export interface StateSchema {
  cars: CarsSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
