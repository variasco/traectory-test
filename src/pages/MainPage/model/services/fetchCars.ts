import { createAsyncThunk } from "@reduxjs/toolkit";
import { CarFromApi } from "../types/Cars";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchCars = createAsyncThunk<CarFromApi[], void, ThunkConfig<string>>(
  "cars/fetchCars",
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.api.get<CarFromApi[]>("/vehicles");

      if (!response.data) throw new Error("Request is incorrect");

      return response.data;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.message || "Something went wrong");
    }
  }
);
