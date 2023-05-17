import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { CarFromApi, CarsSchema } from "../types/Cars";
import { fetchCars } from "../services/fetchCars";

const carsAdapter = createEntityAdapter<CarFromApi>({
  selectId: (car: CarFromApi) => car.id,
});

export const getCars = carsAdapter.getSelectors<StateSchema>(
  (state) => state.cars || carsAdapter.getInitialState()
);

const CarsSlice = createSlice({
  name: "cars",
  initialState: carsAdapter.getInitialState<CarsSchema>({
    isLoading: false,
    error: undefined,
    entities: {},
    ids: [],
  }),
  reducers: {
    editCar: carsAdapter.updateOne,
    deleteCar: carsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action: PayloadAction<CarFromApi[]>) => {
        state.isLoading = false;
        carsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: carsActions } = CarsSlice;
export const { reducer: carsReducer } = CarsSlice;
