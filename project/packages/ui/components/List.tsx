import * as _React from "react";
import { GridWrapper, ListWrapper } from "./List.styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../apps/app/src/app/store/store";
import { removePokemon } from "../../../apps/app/src/storeSlice/pokemonSlice";
type Pokemon = {
  name: string;
  url: string;
};

type ListProps = {
  result: Pokemon[];
};

export const List: React.FC<ListProps> = () => {
  const pokemonsName = useSelector(
    (state: RootState) => state.pokemon.pokemons
  );
  const dispatch = useDispatch();

  const handleRemovePokemon = (pokemonName: string) => {
    dispatch(removePokemon(pokemonName));
  };
  return (
    <GridWrapper>
      {pokemonsName.map((pokemon, index) => (
        <ListWrapper key={index}>
          <p>{pokemon.name}</p>
          <button onClick={() => handleRemovePokemon(pokemon.name)}>
            Remove
          </button>
        </ListWrapper>
      ))}
    </GridWrapper>
  );
};
