

# 🧭 TypeScript Pokédex REPL

An interactive **command-line Pokédex** built with **TypeScript** and **Node.js**, powered by the **PokéAPI**.
Explore the Pokémon world, catch Pokémon, and manage your Pokédex — all from the terminal.

---

## ✨ Overview

This project is a **REPL-based CLI application** that simulates a Pokédex experience.
Users can navigate Pokémon locations, explore areas, attempt to catch Pokémon, and inspect their stats — with performance optimizations like caching and full unit test coverage.

---

## 🚀 Features

* 🗺️ **Explore the world**

  * `map` / `mapb` — Browse location areas with pagination
  * `explore <area>` — View Pokémon found in a specific area

* 🎯 **Catch & manage Pokémon**

  * `catch <pokemon>` — Attempt to catch Pokémon (probability based on base experience)
  * `inspect <pokemon>` — View detailed stats of caught Pokémon
  * `pokedex` — List all captured Pokémon

* 🧠 **Helpful commands**

  * `help` — Display available commands
  * `exit` — Quit the application

* ⚡ **Performance & quality**

  * In-memory caching for PokéAPI responses
  * Unit tests using **Vitest**
  * Fully written in **TypeScript**

---

## 🛠️ Tech Stack

* **TypeScript**
* **Node.js**
* **PokéAPI**
* **Vitest** (unit testing)

---

## 📦 Installation & Setup

```bash
npm install
npm run dev
```

Make sure you have **Node.js** installed before running the project.

---

## 🧪 Testing

Run the test suite with:

```bash
npm run test
```

---

## 📌 Notes

* Pokémon data is fetched live from the PokéAPI and cached in memory for efficiency.
* Captured Pokémon are stored in memory (session-based).
* Designed as a learning project focusing on:

  * TypeScript
  * API integration
  * CLI design
  * Testing practices

---

## 📄 License

This project is for educational purposes.

