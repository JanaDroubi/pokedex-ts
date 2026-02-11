const BASE_URL = "https://pokeapi.co/api/v2";

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export class PokeAPI {
  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${BASE_URL}/location-area?limit=20`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch locations: ${res.status} ${res.statusText}`);
    }

    return res.json() as Promise<ShallowLocations>;
  }
}
