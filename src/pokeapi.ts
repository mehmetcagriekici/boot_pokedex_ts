import { getData } from "./helpers.js";
import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  cache: Cache;
  
  constructor(interval: number) {
    this.cache = new Cache(interval);
  }

  async fetchPokemon(name: string): Promise<SinglePokemon> {
    const cacheEntry = this.cache.get(name);
    if (cacheEntry) {
      return cacheEntry as Promise<SinglePokemon>;
    }

    const data = await getData(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    this.cache.add(name, data);
    return data;
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const locationsURL = pageURL || `${PokeAPI.baseURL}/location-area`;
    const cacheEntry = this.cache.get(locationsURL)
    if (cacheEntry) {
      return cacheEntry as Promise<ShallowLocations>;
    }

    const data = await getData(locationsURL) as Promise<ShallowLocations>;
    this.cache.add(locationsURL, data);
    return data;
  }

  async fetchLocation(locationName: string): Promise<LocationArea> {
    const locationURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cacheEntry = this.cache.get(locationURL);
    if (cacheEntry) {
      return cacheEntry as Promise<LocationArea>;
    }
    const data = await getData(locationURL) as Promise<LocationArea>;
    this.cache.add(locationURL, data);
    return data;
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

export type LocationArea = {
  name: string;
  pokemon_encounters: Pokemon[];
}

export type Pokemon = {
  pokemon: {
    name: string;
    url: string;
  }
}

export type SinglePokemon = {
  id: number;
  name: string;
  base_experience: number;
}
