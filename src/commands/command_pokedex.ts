import type { State } from "../state.js";

export async function commandPokedex(state: State) {
  const caughtPokemon = Object.keys(state.pokedex);

  if (caughtPokemon.length === 0) {
    console.log("Your Pokedex is empty! Go catch some Pokémon!");
    return;
  }

  console.log("Your Pokedex:");
  caughtPokemon.sort().forEach((name) => {
    console.log(` - ${name}`);
  });
}
