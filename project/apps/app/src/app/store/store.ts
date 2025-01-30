import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "../../../src/storeSlice/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
