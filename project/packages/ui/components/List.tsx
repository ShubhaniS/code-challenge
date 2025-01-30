import * as _React from "react";
import { GridWrapper, ListWrapper } from "./List.styles";

type Pokemon = {
  name: string;
  url: string;
};

type ListProps = {
  result: Pokemon[];
};

export const List: React.FC<ListProps> = ({ result }) => {
  return (
    <GridWrapper>
      {result.map((pokemon, index) => (
        <ListWrapper key={index}>
          <p>{pokemon.name}</p>
        </ListWrapper>
      ))}
    </GridWrapper>
  );
};
