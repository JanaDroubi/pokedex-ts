import { startREPL } from "./repl.js";

async function main() {
  await startREPL();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
