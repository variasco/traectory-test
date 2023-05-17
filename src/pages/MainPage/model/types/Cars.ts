import { EntityState } from "@reduxjs/toolkit";

export interface CarFromApi {
  id: number;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
}

export interface CarsSchema extends EntityState<CarFromApi> {
  isLoading: boolean;
  error?: string;

  ///
}
