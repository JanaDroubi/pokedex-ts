import type { State } from "../state.js";

export async function commandCatch(state: State, ...args: string[]) {
  if (args.length === 0) {
    console.log("Usage: catch <pokemon-name>");
    return;
  }

  const pokemonName = args[0].toLowerCase();

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  try {
    // جيب بيانات الـ Pokémon من API
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const res = await fetch(url);

    if (!res.ok) {
      console.log(`Pokemon "${pokemonName}" not found!`);
      return;
    }

    const data = await res.json();

    const baseExp = data.base_experience || 50; // fallback لو مش موجود

    // احتمالية الصيد: كل ما baseExp أعلى → أصعب
    // مثال بسيط: احتمال = 100 / (baseExp / 10 + 1)
    const catchChance = Math.max(0.1, 1 - baseExp / 300); // بين 10% و 100%

    const caught = Math.random() < catchChance;

if (caught) {
  console.log(`${pokemonName} was caught!`);
  state.pokedex[pokemonName] = {
    name: data.name,
    height: data.height,
    weight: data.weight,
    base_experience: data.base_experience,
    stats: data.stats,
    types: data.types,
  };
} else {
  console.log(`${pokemonName} escaped!`);
}  } catch (err) {
    console.error("Catch error:", err instanceof Error ? err.message : err);
  }
}
