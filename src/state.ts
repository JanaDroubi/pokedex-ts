import { createInterface, type Interface } from "node:readline/promises";
import { getCommands } from "./getCommands.js";
import type { CLICommand } from "./command.js";
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";

export type Pokemon = {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  stats: { base_stat: number; stat: { name: string } }[];
  types: { type: { name: string } }[];
};

// تعريف الـ State مرة واحدة فقط
export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
  cache: Cache;
  pokedex: Record<string, Pokemon>; // ← خريطة البوكيمون المقبوضة
};

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const commands = getCommands();
  const pokeapi = new PokeAPI();
  const cache = new Cache(5 * 60 * 1000); // 5 دقايق كمثال

  const pokedex: Record<string, Pokemon> = {}; // فارغ في البداية

  return {
    rl,
    commands,
    pokeapi,
    nextLocationsURL: null,
    prevLocationsURL: null,
    cache,
    pokedex,
  };
}
