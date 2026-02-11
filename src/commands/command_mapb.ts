import type { State } from "../state.js";

export async function commandMapb(state: State) {
  try {
    const locations = await state.pokeapi.fetchLocations(state.prevLocationsURL ?? undefined);
    if (locations.results.length === 0) {
      console.log("No more locations to show.");
      return;
    }

    locations.results.forEach((loc) => {
      console.log(loc.name);
    });

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
  } catch (err) {
    console.error("Error fetching map:", err instanceof Error ? err.message : err);
  }
}
