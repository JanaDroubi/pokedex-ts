import { commandExit } from "./commands/command_exit.js";
import { commandHelp } from "./commands/command_help.js";
import { commandMap } from "./commands/command_map.js";
import { commandMapb } from "./commands/command_mapb.js";
import { commandExplore } from "./commands/command_explore.js";
import { commandCatch } from "./commands/command_catch.js";
import { commandInspect } from "./commands/command_inspect.js";
import { commandPokedex } from "./commands/command_pokedex.js";
import type { CLICommand } from "./command.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
inspect: {
  name: "inspect",
  description: "Inspect a caught Pokemon",
  callback: commandInspect,
},
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
pokedex: {
  name: "pokedex",
  description: "List all Pokémon you've caught",
  callback: commandPokedex,
},

    map: {
      name: "map",
      description: "Displays the next 20 location areas",
      callback: commandMap,
    },
explore: {
  name: "explore",
  description: "Explore a location area to see Pokémon",
  callback: commandExplore,
},
catch: {
  name: "catch",
  description: "Try to catch a Pokemon",
  callback: commandCatch,
},
    mapb: {
      name: "mapb",
      description: "Displays the previous 20 location areas",
      callback: commandMapb,
    },
  };
}
