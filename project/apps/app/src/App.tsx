import * as _React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { List } from "ui";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../src/app/store/store";
import { setPokemons } from "../src/storeSlice/pokemonSlice";

const queryClient = new QueryClient();

const fetchPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  return res.json();
};

const PokemonList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
  });
  useEffect(() => {
    if (data) {
      dispatch(setPokemons(data.results));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading..</p>;
  if (error instanceof Error) return <p>{error.message}</p>;

  return <List result={data.results} />;
};

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <h1>Pokémon List :</h1>
        <PokemonList />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
