import * as _React from "react";

type Pokemon = {
  name: string;
  url: string;
};

type ListProps = {
  result: Pokemon[];
};

export const List: React.FC<ListProps> = ({ result }) => {
  return (
    <ul>
      {result.map((pokemon, index) => (
        <li key={index}>
          <p>{pokemon.name}</p>
        </li>
      ))}
    </ul>
  );
};
