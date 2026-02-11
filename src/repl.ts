import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { initState } from "./state.js";
import { cleanInput } from "./utils.js";
import type { State } from "./state.js";

export async function startREPL() {
  const state = initState();

  console.log("Welcome! Type 'help' for commands or 'exit' to quit.\n");

  state.rl.prompt();

  for await (const line of state.rl) {
    const cleaned = cleanInput(line);

    if (cleaned.length === 0) {
      state.rl.prompt();
      continue;
    }


if (cleaned.length === 0) {
  state.rl.prompt();
  continue;
}

const commandName = cleaned[0];
const args = cleaned.slice(1);  // ← باقي الكلمات بعد الأمر

const command = state.commands[commandName];

if (command) {
  try {
    await command.callback(state, ...args);  // ← مرّري args هنا
  } catch (err) {
    console.error(`Error in command "${commandName}":`, err);
  }
} else {
  console.log(`Unknown command: ${commandName}`);
  console.log("Type 'help' to see available commands.");
}

state.rl.prompt();
  }
}
