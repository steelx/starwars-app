import { configureStore } from "@reduxjs/toolkit";
import {starWarsApi} from "@store/star-wars-api/starWarsApi";

export const store = configureStore({
  reducer: {
    [starWarsApi.reducerPath]: starWarsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
      starWarsApi.middleware
  ),
  devTools: {
    name: "allica-bank-app",
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
