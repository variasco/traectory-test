import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { carsReducer } from "pages/MainPage";
import { $api } from "shared/api/api";
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    cars: carsReducer,
  };

  const store = configureStore({
    reducer: rootReducer as ReducersMapObject<StateSchema>,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }),
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
