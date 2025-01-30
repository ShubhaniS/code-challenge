import * as _React from "react";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { List } from "ui";

const queryClient = new QueryClient();

const fetchPokemon = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  return res.json();
};

const PokemonList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemon"],
    queryFn: fetchPokemon,
  });

  if (isLoading) return <p>Loading..</p>;
  if (error instanceof Error) return <p>{error.message}</p>;
  console.log("data", data.results);
  // in 2nd task will the result as prop = item={data.results}
  return <List />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Pokémon List :</h1>
      <PokemonList />
    </QueryClientProvider>
  );
};

export default App;
