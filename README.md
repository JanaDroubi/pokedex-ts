# TypeScript Pokedex REPL

A command-line Pokedex built with TypeScript & Node.js using the PokéAPI.

## Features
- `map` / `mapb` — explore location areas (paginated)
- `explore <area>` — list Pokémon in an area
- `catch <pokemon>` — try to catch Pokémon (chance based on base experience)
- `inspect <pokemon>` — view details of caught Pokémon
- `pokedex` — list all caught Pokémon
- `help` — show commands
- `exit` — quit
- In-memory caching for API responses
- Unit tests with Vitest

## Setup

```bash
npm install
npm run dev
