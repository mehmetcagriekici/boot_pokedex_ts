import { getData } from "./helpers.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const locationsURL = pageURL || `${PokeAPI.baseURL}/location-area`;
    return await getData(locationsURL) as Promise<ShallowLocations>;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const locationURL = `${PokeAPI.baseURL}/location/${locationName}`;
    return await getData(locationURL) as Promise<Location>;
  }
}

export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: Location[];
};

export type Location = {
  url: string;
  name: string;
};
