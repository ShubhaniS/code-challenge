import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PokemonObj = {
  name: string;
  url: string;
};

type PokemonStateType = {
  pokemons: PokemonObj[];
};

const initialState: PokemonStateType = {
  pokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<PokemonObj[]>) => {
      state.pokemons = action.payload;
    },
    removePokemon: (state, action: PayloadAction<string>) => {
      state.pokemons = state.pokemons.filter(
        (pokemon) => pokemon.name !== action.payload
      );
    },
  },
});

export const { setPokemons, removePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
