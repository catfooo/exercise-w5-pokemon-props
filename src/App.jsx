/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */

import React from "react";
import data from "./data.json";

export const App = () => {
  return (
    <div className="App">
      <PokemonList data={data.pokemons} />
    </div>
  );
};

const PokemonList = ({ data }) => {
  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {data.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList;