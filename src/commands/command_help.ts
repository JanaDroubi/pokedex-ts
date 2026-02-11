// src/commands/command_help.ts
import type { State } from "../state.js";

export async function commandHelp(state: State) {   // ← must be "export async function"
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");

  for (const [name, cmd] of Object.entries(state.commands)) {
    console.log(`${name}: ${cmd.description}`);
  }

  console.log("");
}
