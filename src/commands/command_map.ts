import type { State } from "../state.js";
import type { ShallowLocations } from "../pokeapi.js";

export async function commandMap(state: State) {
  try {
    const url = state.nextLocationsURL || "https://pokeapi.co/api/v2/location-area?limit=20&offset=0";

    // Check cache first
    let locations = state.cache.get<ShallowLocations>(url);
    if (locations) {
      console.log("Cache hit!");
    } else {
      console.log("Fetching from API...");
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed: ${res.status}`);
      }
      locations = await res.json() as ShallowLocations;
      state.cache.add(url, locations);
    }

    if (locations.results.length === 0) {
      console.log("No more locations.");
      return;
    }

    locations.results.forEach((loc: { name: string; url: string }) => console.log(loc.name));
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
  } catch (err) {
    console.error("Map error:", err instanceof Error ? err.message : err);
  }
}
