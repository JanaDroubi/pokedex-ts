import type { State } from "../state.js";
import type { ShallowLocations } from "../pokeapi.js"; // لو عايزة تستخدمي نوع تاني

export async function commandExplore(state: State, ...args: string[]) {
  if (args.length === 0) {
    console.log("Usage: explore <location-area-name>");
    return;
  }

  const areaName = args[0].toLowerCase();

  console.log(`Exploring ${areaName}...`);

try {
  const cacheKey = `explore:${areaName}`;
  let pokemonList = state.cache.get<string[]>(cacheKey);

  if (pokemonList) {
    console.log("Cache hit!");
  } else {
    console.log("Fetching from API...");
    const url = `https://pokeapi.co/api/v2/location-area/${areaName}`;
    const res = await fetch(url);

    if (!res.ok) {
      console.log(`Location "${areaName}" not found or invalid (status ${res.status}).`);
      return;
    }

    const data: any = await res.json();

    const encounters = data?.pokemon_encounters || [];
    pokemonList = encounters
      .map((enc: any) => enc?.pokemon?.name)  // ← corrected here
      .filter((name: string | undefined) => typeof name === "string" && name.length > 0)
      .sort();

    if (!pokemonList || pokemonList.length === 0) {
      console.log("No Pokémon found in this area (or invalid response).");
      return;
    }

    state.cache.add(cacheKey, pokemonList);
  }

  console.log("Found Pokemon:");
  pokemonList.forEach((name: string) => console.log(` - ${name}`));
} catch (err) {
  console.error("Explore error:", err instanceof Error ? err.message : err);
}

}
